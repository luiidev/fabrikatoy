<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreCustomerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        $document_number_val = $address_val = '';

        if ($this->filled('document_type')) {
            $document_number_val = match ($this->input('document_type')) {
                'DNI' => 'required|string|digits:8',
                'RUC' => 'required|string|digits:11',
                default => 'nullable|string'
            };

            $address_val = match ($this->input('document_type')) {
                'RUC' => 'required|string|max:255',
                default => 'nullable|string'
            };
        }

        return [
            'document_type' => 'nullable|in:DNI,RUC',
            'document_number' => $document_number_val,
            'name' => 'required|string|max:75',
            'address' => $address_val,
            'email' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:15',
            'state' => 'required|in:0,1',
        ];
    }
}
