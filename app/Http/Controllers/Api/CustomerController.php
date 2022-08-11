<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Customer::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validated([
            'sort' => 'in:document_type,document_number,name'
        ]);

        $customer = Customer::query()
            ->own()
            ->whereLike('name', $request->input('search'))
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $customer]);
    }

    public function store(StoreCustomerRequest $request): \Illuminate\Http\JsonResponse
    {
        $customer = Customer::create($request->only('document_type', 'document_number', 'name', 'address', 'email', 'phone', 'state'));

        return response()->json(['message' => 'Se registro el cliente.', 'data' => $customer]);
    }

    public function show(Customer $customer)
    {
        //
    }

    public function update(UpdateCustomerRequest $request, Customer $customer): \Illuminate\Http\JsonResponse
    {
        $customer->update($request->only('document_type', 'document_number', 'name', 'address', 'email', 'phone', 'state'));

        return response()->json(['message' => 'Se actualizo el cliente.', 'data' => $customer]);
    }

    public function destroy(Customer $customer)
    {
        //
    }
}
