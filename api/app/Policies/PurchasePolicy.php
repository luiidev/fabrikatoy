<?php

namespace App\Policies;

use App\Models\Purchase;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PurchasePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Purchase $purchase): bool
    {
        return $user->company_id === $purchase->company_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Purchase $purchase): bool
    {
        return $user->company_id === $purchase->company_id;
    }

    public function delete(User $user, Purchase $purchase): bool
    {
        return $user->company_id === $purchase->company_id;
    }

    public function restore(User $user, Purchase $purchase): bool
    {
        return false;
    }

    public function forceDelete(User $user, Purchase $purchase): bool
    {
        return false;
    }
}
