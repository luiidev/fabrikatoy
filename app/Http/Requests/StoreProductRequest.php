<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'code' => 'nullable|string|max:30',
            'name' => 'required|string|max:255',
            'state' => 'required|numeric|in:0,1',
            'company_id' => 'required|exists:companies,id',
            'provider' => 'nullable|array',
            'provider.*.id' => 'numeric|exists:providers,id'
        ];
    }
}
