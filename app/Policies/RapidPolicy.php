<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Rapid;
use Illuminate\Auth\Access\HandlesAuthorization;

class RapidPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the rapid can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list rapids');
    }

    /**
     * Determine whether the rapid can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Rapid  $model
     * @return mixed
     */
    public function view(User $user, Rapid $model)
    {
        return $user->hasPermissionTo('view rapids');
    }

    /**
     * Determine whether the rapid can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create rapids');
    }

    /**
     * Determine whether the rapid can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Rapid  $model
     * @return mixed
     */
    public function update(User $user, Rapid $model)
    {
        return $user->hasPermissionTo('update rapids');
    }

    /**
     * Determine whether the rapid can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Rapid  $model
     * @return mixed
     */
    public function delete(User $user, Rapid $model)
    {
        return $user->hasPermissionTo('delete rapids');
    }

    /**
     * Determine whether the rapid can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Rapid  $model
     * @return mixed
     */
    public function restore(User $user, Rapid $model)
    {
        return false;
    }

    /**
     * Determine whether the rapid can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Rapid  $model
     * @return mixed
     */
    public function forceDelete(User $user, Rapid $model)
    {
        return false;
    }
}
