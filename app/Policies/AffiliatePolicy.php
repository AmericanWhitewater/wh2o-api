<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Affiliate;
use Illuminate\Auth\Access\HandlesAuthorization;

class AffiliatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the affiliate can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list affiliates');
    }

    /**
     * Determine whether the affiliate can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Affiliate  $model
     * @return mixed
     */
    public function view(User $user, Affiliate $model)
    {
        return $user->hasPermissionTo('view affiliates');
    }

    /**
     * Determine whether the affiliate can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create affiliates');
    }

    /**
     * Determine whether the affiliate can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Affiliate  $model
     * @return mixed
     */
    public function update(User $user, Affiliate $model)
    {
        return $user->hasPermissionTo('update affiliates');
    }

    /**
     * Determine whether the affiliate can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Affiliate  $model
     * @return mixed
     */
    public function delete(User $user, Affiliate $model)
    {
        return $user->hasPermissionTo('delete affiliates');
    }

    /**
     * Determine whether the affiliate can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Affiliate  $model
     * @return mixed
     */
    public function restore(User $user, Affiliate $model)
    {
        return false;
    }

    /**
     * Determine whether the affiliate can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Affiliate  $model
     * @return mixed
     */
    public function forceDelete(User $user, Affiliate $model)
    {
        return false;
    }
}
