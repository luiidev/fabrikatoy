<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Product $product): bool
    {
        return $user->company_id === $product->company_id;
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, Product $product): bool
    {
        return $user->company_id === $product->company_id;
    }

    public function delete(User $user, Product $product): bool
    {
        return $user->company_id === $product->company_id;
    }

    public function restore(User $user, Product $product)
    {
        //
    }

    public function forceDelete(User $user, Product $product)
    {
        //
    }
}
