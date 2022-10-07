<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreSaleRequest;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleDetail;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Sale::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:date'
        ]);

        $data = Sale::query()
            ->with(['user', 'customer', 'branch_office'])
            ->own()
            ->where(function($query) use ($request) {
                $query
                    ->whereLike('date', $request->input('search'))
                    ->orWhereLike('number', $request->input('search'))
                    ->orWhereHas('user', fn($q) => $q->search($request->input('search')))
                    ->orWhereHas('customer', fn($q) => $q->search($request->input('search')));
            })
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $data]);
    }

    public function show(Sale $sale): \Illuminate\Http\JsonResponse
    {
        $sale->load(['detail' => fn($q) => $q->with(['product', 'unit']), 'company', 'branch_office', 'customer', 'user']);

        return response()->json(['message' => '', 'data' => $sale]);
    }

    /**
     * @throws \Throwable
     */
    public function store(StoreSaleRequest $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();

        try {
            $user = Auth::user();
            $taxes_included = $user->company->taxes_included;

            $sale = new Sale();
            $sale->company_id       = $user->company_id;
            $sale->branch_office_id = $user->company_id;
            $sale->user_id          = $user->id;
            $sale->customer_id      = $this->getCustomerId($request);
            $sale->type             = $request->input('customer.type');
            $sale->date             = now()->toDateTimeString();

            $details = [];
            foreach ($request->input('products') as $product) {
                $productModel = Product::find($product['id']);

                if (isset($product['price_sale']) && !$user->isAdmin()) {
                    DB::rollBack();

                    return response()->json(['message' => 'No tienes permiso para alterar el precio.'], 422);
                }

                $saleDetail = new SaleDetail();
                $saleDetail->product_id     = $product['id'];
                $saleDetail->quantity       = $product['quantity_sale'];
                $saleDetail->unit_id        = $productModel->unit_id;
                $saleDetail->price          = $product['price_sale'] ?? $productModel->price;
                $saleDetail->total          = $product['quantity_sale'] * ($product['price_sale'] ?? $productModel->price);
                $saleDetail->observation    = $product['observation'] ?? null;

                $details[] = $saleDetail;
            }

            if ($taxes_included) {
                $sale->total = array_reduce($details, fn ($t, $d) => $t + $d['total'], 0);
                $sale->igv = $sale->total * 0.18;
                $sale->subtotal = $sale->total * 0.82;
            } else {
                $sale->subtotal = array_reduce($details, fn ($t, $d) => $t + $d['total'], 0);
                $sale->igv = $sale->total * 0.18;
                $sale->total = $sale->subtotal + $sale->igv;
            }

            $sale->save();
            $sale->detail()->saveMany($details);

            DB::commit();

            return response()->json(['message' => 'La venta ha sido registrada.']);
        } catch (\Exception $e) {
            DB::rollBack();

            throw $e;
        }
    }

    private function getCustomerId(Request $request): int|null
    {
        if ($request->filled('customer.id')) {
            return $request->input('customer.id');
        } else if ($request->filled('customer.document_type')) {
            return Customer::create($request->input('customer'))->id;
        }

        return null;
    }
}
