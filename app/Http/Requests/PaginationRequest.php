<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class PaginationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check() && Auth::user()->isAdmin();
    }

    public function rules(): array
    {
        return [
            'search' => 'nullable|string|max:255',
            'sort' => 'nullable|string|in:name,quantity',
            'direction' => 'nullable|string|in:asc,desc',
            'page' => 'nullable|numeric',
            'per_page' => 'nullable|numeric|in:5,10,25',
        ];
    }
}
