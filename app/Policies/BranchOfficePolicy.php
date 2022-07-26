<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\BranchOffice;
use App\Models\User;

class BranchOfficePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return false;
    }

    public function view(User $user, BranchOffice $company): bool
    {
        return false;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, BranchOffice $company): bool
    {
        return false;
    }

    public function delete(User $user, BranchOffice $company): bool
    {
        return false;
    }

    public function restore(User $user, BranchOffice $company): bool
    {
        return false;
    }

    public function forceDelete(User $user, BranchOffice $company): bool
    {
        return false;
    }
}
