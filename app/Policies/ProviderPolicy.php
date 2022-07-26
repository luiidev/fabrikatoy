<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Models\Provider;
use App\Models\User;

class ProviderPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Provider $provider): bool
    {
        return $user->company_id === $provider->company_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Provider $provider): bool
    {
        return $user->company_id === $provider->company_id;
    }

    public function delete(User $user, Provider $provider): bool
    {
        return $user->company_id === $provider->company_id;
    }

    public function restore(User $user, Provider $provider)
    {
        //
    }

    public function forceDelete(User $user, Provider $provider)
    {
        //
    }
}
