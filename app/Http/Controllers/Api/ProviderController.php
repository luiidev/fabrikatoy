<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use Illuminate\Http\Request;
use App\Models\Provider;

class ProviderController extends Controller
{
    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $products = Provider::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Provider $provider)
    {
        //
    }

    public function update(Request $request, Provider $provider)
    {
        //
    }

    public function destroy(Provider $provider)
    {
        //
    }
}
