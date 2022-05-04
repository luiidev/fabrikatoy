<?php

namespace App\Policies;

use App\Models\Company;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CompanyPolicy
{
    use HandlesAuthorization;


    public function viewAny(User $user): bool
    {
        return false;
    }

    public function view(User $user, Company $company): bool
    {
        return false;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Company $company): bool
    {
        return false;
    }

    public function delete(User $user, Company $company): bool
    {
        return false;
    }

    public function restore(User $user, Company $company)
    {
        //
    }

    public function forceDelete(User $user, Company $company)
    {
        //
    }
}
