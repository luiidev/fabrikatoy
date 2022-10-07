<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
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
                        ->where('id', request()->user()->company_id) : null
            ],
            'branch_office_id' => [
                'nullable',
                !Auth::user()->isSuper() ?
                    Rule::exists('branch_offices', 'id')
                        ->where('company_id', request()->user()->company_id) : null
            ],
            'nick' => 'required|string|min:3|max:50|unique:users,nick,'.$this->route('user')->id,
            'password' => ['nullable', Password::min(10)->mixedCase()->numbers()->symbols()],
            'first_name' => 'nullable|string|min:3|max:25',
            'last_name' => 'nullable|string|min:3|max:50',
            'dni' => 'nullable|size:8',
            'phone' => 'nullable|string|starts_with:+51|size:12',
            'address' => 'nullable|string|max:255',
            'role' => 'required|in:2,3',
            'email' => 'nullable|email',
            'state' => 'required|in:1,0',
        ];
    }
}
