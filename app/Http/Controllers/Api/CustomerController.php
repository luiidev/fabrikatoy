<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

    public function getForSale(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'document_type' => 'required|string|in:DNI,RUC',
            'document_number' => 'required|string|between:8,12',
        ]);

        $customer = Customer::query()
            ->ownCompany()
            ->where('document_type', $request->input('document_type'))
            ->where('document_number', $request->input('document_number'))
            ->first();

        if (is_null($customer) && $request->input('document_type') === 'DNI') {
            $customer = $this->getByDNI($request->input('document_number'));
        }

        return response()->json(['message' => '', 'data' => $customer]);
    }

    public function getByDNI($document_number): array
    {
        set_time_limit(125);
        $customer = [];

        $url = "https://api.dniruc.com/api/search/dni/{$document_number}/".env('DNI_KEY');

        $response = Http::get($url)->json();

        if ($response['success'] === true) {
            $customer['name'] = $response['data']['nombre_completo'];
        }

        return $customer;
    }
}
