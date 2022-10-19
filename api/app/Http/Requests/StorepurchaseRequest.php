<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StorePurchaseRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check();
    }

    public function rules(): array
    {
        $company_id = Auth::user()->company_id;

        return [
            'provider_id' => ['required', Rule::exists('providers', 'id')->where('company_id', $company_id)],
            'type' => 'required|in:BOLETA,FACTURA',
            'number' => 'required|string|max:25',
            'document' => 'nullable',
            'date' => 'required|date',
            'detail' => 'required|array',
            'detail.*.product_id' => ['required', Rule::exists('products', 'id')->where('company_id', $company_id)],
            'detail.*.quantity' => 'required|integer|min:1',
            'detail.*.price' => 'required|numeric|min:0',
            'detail.*.unit_id' => ['required', 'integer', Rule::exists('units', 'id')->where('company_id', $company_id)],
            'detail.*.observation' => 'nullable|string',
        ];
    }
}
