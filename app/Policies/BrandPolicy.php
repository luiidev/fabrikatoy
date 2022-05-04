<?php

namespace App\Policies;

use App\Models\Brand;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BrandPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        return true;
    }

    public function view(User $user, Brand $brand): bool
    {
        return $user->company_id === $brand->company_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Brand $brand)
    {
        return $user->company_id === $brand->company_id;
    }

    public function delete(User $user, Brand $brand)
    {
        return $user->company_id === $brand->company_id;
    }

    public function restore(User $user, Brand $brand)
    {
        //
    }

    public function forceDelete(User $user, Brand $brand)
    {
        //
    }
}
