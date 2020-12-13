<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Injury;
use Illuminate\Auth\Access\HandlesAuthorization;

class InjuryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the injury can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list injuries');
    }

    /**
     * Determine whether the injury can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Injury  $model
     * @return mixed
     */
    public function view(User $user, Injury $model)
    {
        return $user->hasPermissionTo('view injuries');
    }

    /**
     * Determine whether the injury can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create injuries');
    }

    /**
     * Determine whether the injury can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Injury  $model
     * @return mixed
     */
    public function update(User $user, Injury $model)
    {
        return $user->hasPermissionTo('update injuries');
    }

    /**
     * Determine whether the injury can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Injury  $model
     * @return mixed
     */
    public function delete(User $user, Injury $model)
    {
        return $user->hasPermissionTo('delete injuries');
    }

    /**
     * Determine whether the injury can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Injury  $model
     * @return mixed
     */
    public function restore(User $user, Injury $model)
    {
        return false;
    }

    /**
     * Determine whether the injury can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Injury  $model
     * @return mixed
     */
    public function forceDelete(User $user, Injury $model)
    {
        return false;
    }
}
