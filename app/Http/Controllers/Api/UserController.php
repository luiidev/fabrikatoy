<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class);
    }

    public function index(PaginationRequest $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'sort' => 'in:first_name,nick,role'
        ]);

        $users = User::query()
            ->select(['id', 'branch_office_id', 'company_id', 'first_name', 'last_name', 'nick', 'role', 'state'])
            ->with('branch_office')
            ->own()
            ->search($request->input('search'))
            ->where('role', '<>', 1) // Super
            ->apiPaginate();

        return response()->json(['message' => '', 'data' => $users]);
    }

    public function store(StoreUserRequest $request): \Illuminate\Http\JsonResponse
    {
        $user = User::create($request->only(['company_id', 'branch_office_id', 'nick', 'password', 'first_name', 'last_name', 'dni', 'address', 'phone', 'role', 'email', 'state']));

        return response()->json(['message' => 'Se registro el usuario.', 'data' => $user]);
    }

    public function show(User $user): \Illuminate\Http\JsonResponse
    {
        $user->load(['company', 'branch_office']);

        return response()->json(['message' => '', 'data'=> $user]);
    }

    public function update(UpdateUserRequest $request, User $user): \Illuminate\Http\JsonResponse
    {
        $user->update($request->only(['company_id', 'branch_office_id', 'nick', 'password', 'first_name', 'last_name', 'dni', 'address', 'phone', 'role', 'email', 'state']));

        return response()->json(['message' => 'Se actualizo el usuario.', 'data' => $user]);
    }

    public function destroy(User $user)
    {
        //
    }
}
