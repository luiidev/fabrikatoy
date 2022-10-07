<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreProviderRequest;
use App\Http\Requests\UpdateProviderRequest;
use Illuminate\Http\Request;
use App\Models\Provider;

class ProviderController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Provider::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:name'
        ]);

        $products = Provider::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $products]);
    }

    public function store(StoreProviderRequest $request): \Illuminate\Http\JsonResponse
    {
        $provider = Provider::create($request->only(['company_id', 'ruc', 'name', 'address', 'website', 'state']));

        return response()->json(['message' => 'Se registro el proveedor.', 'data' => $provider]);
    }

    public function show(Provider $provider)
    {
        //
    }

    public function update(UpdateProviderRequest $request, Provider $provider): \Illuminate\Http\JsonResponse
    {
        $provider->update($request->only(['company_id', 'ruc', 'name', 'address', 'website', 'state']));

        return response()->json(['message' => 'Se actualizo el proveedor.', 'data' => $provider]);
    }

    public function destroy(Provider $provider)
    {
        //
    }
}
