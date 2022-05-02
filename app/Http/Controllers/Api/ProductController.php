<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
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
            ->with(['unit', 'providers'])
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(StoreProductRequest $request): \Illuminate\Http\JsonResponse
    {
        $product = Product::create($request->only(['company_id', 'code', 'name', 'state']));

        return response()->json(['message' => 'Se registro el producto.', 'data' => $product]);
    }

    public function show(Product $product)
    {
        //
    }

    public function update(UpdateProductRequest $request, Product $product): \Illuminate\Http\JsonResponse
    {
        $product->update($request->only(['company_id', 'code', 'name', 'state']));

        return response()->json(['message' => 'Se actualizo el producto.', 'data' => $product]);
    }

    public function destroy(Product $product)
    {
        //
    }
}
