<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Region;
use Illuminate\Auth\Access\HandlesAuthorization;

class RegionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the region can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list regions');
    }

    /**
     * Determine whether the region can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Region  $model
     * @return mixed
     */
    public function view(User $user, Region $model)
    {
        return $user->hasPermissionTo('view regions');
    }

    /**
     * Determine whether the region can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create regions');
    }

    /**
     * Determine whether the region can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Region  $model
     * @return mixed
     */
    public function update(User $user, Region $model)
    {
        return $user->hasPermissionTo('update regions');
    }

    /**
     * Determine whether the region can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Region  $model
     * @return mixed
     */
    public function delete(User $user, Region $model)
    {
        return $user->hasPermissionTo('delete regions');
    }

    /**
     * Determine whether the region can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Region  $model
     * @return mixed
     */
    public function restore(User $user, Region $model)
    {
        return false;
    }

    /**
     * Determine whether the region can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Region  $model
     * @return mixed
     */
    public function forceDelete(User $user, Region $model)
    {
        return false;
    }
}
