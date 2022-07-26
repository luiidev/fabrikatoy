<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Product::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $products = Product::query()
            ->with(['unit', 'providers', 'brand'])
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function listForSale(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();

        $query = Product::query()
            ->with(['unit', 'brand'])
            ->ownCompany()
            ->whereLike('name', $request->input('search'))
            ->active()
            ->limit(24);

        if ($request->filled('category_id')){
            $query->whereHas('categories', fn ($q) => $q->where('category_id', $request->input('category_id')));
        }

        $products = $query->get();

        $data = [
            'items' => $products,
            'taxes_included' => $user->company->taxes_included
        ];

        return response()->json(['message' => '', 'data' => $data]);
    }

    public function store(StoreProductRequest $request): \Illuminate\Http\JsonResponse
    {
        $product = Product::create($request->only(['company_id', 'brand_id', 'code', 'name', 'state']));

        $product->providers()->sync($request->input('providers'));

        return response()->json(['message' => 'Se registro el producto.', 'data' => $product]);
    }

    public function show(Product $product)
    {
        //
    }

    public function update(UpdateProductRequest $request, Product $product): \Illuminate\Http\JsonResponse
    {
        $product->update($request->only(['company_id', 'brand_id', 'code', 'name', 'state']));
        $product->providers()->sync($request->input('providers'));

        return response()->json(['message' => 'Se actualizo el producto.', 'data' => $product]);
    }

    public function destroy(Product $product)
    {
        //
    }
}
