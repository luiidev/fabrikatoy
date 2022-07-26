<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreSaleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        $company_id = Auth::user()->company_id;

        return [
            'customer' => 'nullable',
            'customer.id' => ['nullable', Rule::exists('customers', 'id')->where('company_id', $company_id)],
            'customer.document_type' => 'nullable|in:DNI,RUC',
            'customer.document_number' => Rule::requiredIf($this->filled('customer.document_type')),
            'customer.name' => Rule::requiredIf($this->filled('customer.document_type')),
            'customer.address' => Rule::requiredIf($this->input('customer.document_type') === 'RUC'),
            'type' => 'nullable|in:BOLETA,FACTURA',
            'products' => 'required|array',
            'products.*.id' => ['required', Rule::exists('products', 'id')->where('company_id', $company_id)],
            'products.*.quantity_sale' => 'required|integer|min:0',
            'products.*.price_sale' => 'nullable|numeric|min:0',
            'products.*.unit_id' => 'nullable|integer',
            'products.*.observation' => 'nullable|string',
        ];
    }
}
