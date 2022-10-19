<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StorePurchaseRequest;
use App\Http\Requests\UpdatePurchaseRequest;
use App\Models\Product;
use App\Models\purchase;
use App\Models\PurchaseDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Purchase::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:date'
        ]);

        $data = Purchase::query()
            ->with(['user', 'provider', 'branch_office'])
            ->own()
            ->where(function($query) use ($request) {
                $query
                    ->whereLike('date', $request->input('search'))
                    ->orWhereLike('number', $request->input('search'))
                    ->orWhereHas('user', fn($q) => $q->search($request->input('search')))
                    ->orWhereHas('provider', fn($q) => $q->search($request->input('search')));
            })
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $data]);
    }

    /**
     * @throws \Exception
     */
    public function store(StorePurchaseRequest $request): \Illuminate\Http\JsonResponse
    {
        DB::beginTransaction();

        try {
            $user = Auth::user();
            $taxes_included = $user->company->taxes_included;

            $purchase = new Purchase();
            $purchase->company_id       = $user->company_id;
            $purchase->branch_office_id = $user->company_id;
            $purchase->user_id          = $user->id;
            $purchase->provider_id      = $request->input('provider_id');
            $purchase->type             = $request->input('type');
            $purchase->number           = $request->input('number');
            $purchase->date             = $request->input('date');

            $details = [];
            foreach ($request->input('detail') as $product) {
                $purchaseDetail = new PurchaseDetail();
                $purchaseDetail->product_id     = $product['product_id'];
                $purchaseDetail->quantity       = $product['quantity'];
                $purchaseDetail->unit_id        = $product['unit_id'];
                $purchaseDetail->price          = $product['price'];
                $purchaseDetail->total          = $product['quantity'] * $product['price'];
                $purchaseDetail->observation    = $product['observation'] ?? null;

                $details[] = $purchaseDetail;
            }

            $purchase->total = array_reduce($details, fn ($t, $d) => $t + $d['total'], 0);
            $purchase->igv = $purchase->total * 0.18;
            $purchase->subtotal = $purchase->total * 0.82;

            $purchase->save();
            $purchase->detail()->saveMany($details);

            DB::commit();

            return response()->json(['message' => 'La venta ha sido registrada.']);
        } catch (\Exception $e) {
            DB::rollBack();

            throw $e;
        }
    }

    public function show(purchase $purchase): \Illuminate\Http\JsonResponse
    {
        $purchase->load(['detail' => fn($q) => $q->with(['product', 'unit']), 'company', 'branch_office', 'provider', 'user']);

        return response()->json(['message' => '', 'data' => $purchase]);
    }

    public function update(UpdatePurchaseRequest $request, purchase $purchase)
    {
        //
    }

    public function destroy(purchase $purchase)
    {
        //
    }
}
