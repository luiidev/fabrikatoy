<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateProviderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'company_id' => [
                'nullable',
                !Auth::user()->isSuper() ?
                    Rule::exists('companies', 'id')
                        ->where('id', request()->user()->company_id) : ''
            ],
            'name' => 'required|string|max:255',
            'ruc' => 'nullable|string|digits:11',
            'address' => 'nullable|string|max:255',
            'website' => 'nullable|string|max:255',
            'state' => 'required|in:0,1',
        ];
    }
}
