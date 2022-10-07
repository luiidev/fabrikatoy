<?php

namespace App\Policies;

use App\Models\Sale;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SalePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Sale $sale): bool
    {
        return $user->company_id === $sale->company_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Sale $sale): bool
    {
        return $user->company_id === $sale->company_id;
    }

    public function delete(User $user, Sale $sale): bool
    {
        return $user->company_id === $sale->company_id;
    }

    public function restore(User $user, Sale $sale): bool
    {
        return false;
    }

    public function forceDelete(User $user, Sale $sale): bool
    {
        return false;
    }
}
