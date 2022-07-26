<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreProductRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'code' => 'nullable|string|max:30',
            'name' => 'required|string|max:255',
            'state' => 'required|numeric|in:0,1',
            'company_id' => [
                'nullable',
                !Auth::user()->isSuper() ?
                Rule::exists('companies', 'id')
                    ->where('id', request()->user()->company_id) : null
            ],
            'brand_id' => [
                'required',
                !Auth::user()->isSuper() ?
                Rule::exists('brands', 'id')
                    ->where('company_id', request()->user()->company_id) : null
            ],
            'provider' => 'array',
            'provider.*' => [
                !Auth::user()->isSuper() ?
                Rule::exists('providers', 'id')
                    ->where('company_id', request()->user()->company_id) : null
            ]
        ];
    }
}
