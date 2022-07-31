<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreBrandRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'company_id' => [
                'nullable',
                !Auth::user()->isSuper() ?
                    Rule::exists('companies', 'id')
                        ->where('id', request()->user()->company_id) : null
            ],
            'state' => 'required|in:0,1',
        ];
    }
}
