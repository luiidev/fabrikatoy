<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Brand;
use App\Models\User;

class BrandPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
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

    public function update(User $user, Brand $brand): bool
    {
        return $user->company_id === $brand->company_id;
    }

    public function delete(User $user, Brand $brand): bool
    {
        return $user->company_id === $brand->company_id;
    }

    public function restore(User $user, Brand $brand): bool
    {
        return false;
    }

    public function forceDelete(User $user, Brand $brand): bool
    {
        return false;
    }
}
