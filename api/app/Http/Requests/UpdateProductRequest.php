<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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
                'required',
                !Auth::user()->isSuper() ?
                    Rule::exists('companies', 'id')
                        ->where('id', request()->user()->company_id) : ''
            ],
            'brand_id' => [
                'required',
                !Auth::user()->isSuper() ?
                    Rule::exists('brands', 'id')
                        ->where('company_id', request()->user()->company_id) : ''
            ],
            'providers_id' => 'present|array',
            'providers_id.*' => [
                'nullable',
                'integer',
                !Auth::user()->isSuper() ?
                    Rule::exists('providers', 'id')
                        ->where('company_id', request()->user()->company_id) : ''
            ]
        ];
    }
}
