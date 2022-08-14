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
        return true;
    }

    public function view(User $user, BranchOffice $branchOffice): bool
    {
        return $user->company_id === $branchOffice->company_id;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, BranchOffice $branchOffice): bool
    {
        return false;
    }

    public function delete(User $user, BranchOffice $branchOffice): bool
    {
        return false;
    }

    public function restore(User $user, BranchOffice $branchOffice): bool
    {
        return false;
    }

    public function forceDelete(User $user, BranchOffice $branchOffice): bool
    {
        return false;
    }
}
