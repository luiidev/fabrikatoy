<?php

namespace App\Http\Controllers\Api;

use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Hash;

class AuthController extends Controller
{
    /**
     * @throws ValidationException
     */
    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'nick' => 'required|string|max:32',
            'password' => 'required|string|max:32',
            'device_name' => 'required|string|max:32',
        ]);

        $user = User::where('nick', $request->input('nick'))->first();

        if (! $user || ! Hash::check($request->input('password'), $user->password)) {
            throw ValidationException::withMessages([
                'nick' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response()->json([
            'message' => 'Login',
            'token' => $user->createToken($request->input('device_name'))->plainTextToken,
            'data' => $user,
        ]);
    }

    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout.']);
    }

    public function me(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json(['message' => '', 'data' => $request->user()]);
    }
}
