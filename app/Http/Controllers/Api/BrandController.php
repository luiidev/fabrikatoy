<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Models\Brand;

class BrandController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Brand::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:name'
        ]);

        $products = Brand::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(StoreBrandRequest $request): \Illuminate\Http\JsonResponse
    {
        $brand = Brand::create($request->only(['company_id', 'name', 'state']));

        return response()->json(['message' => 'Se registro la marca.', 'data' => $brand]);
    }

    public function show(Brand $brand)
    {
        //
    }

    public function update(UpdateBrandRequest $request, Brand $brand): \Illuminate\Http\JsonResponse
    {
        $brand->update($request->only(['company_id', 'name', 'state']));

        return response()->json(['message' => 'Se actualizo la marca.', 'data' => $brand]);
    }

    public function destroy(Brand $brand)
    {
        //
    }
}
