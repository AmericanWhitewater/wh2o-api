<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Accident;
use Illuminate\Auth\Access\HandlesAuthorization;

class AccidentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the accident can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list accidents');
    }

    /**
     * Determine whether the accident can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Accident  $model
     * @return mixed
     */
    public function view(User $user, Accident $model)
    {
        return $user->hasPermissionTo('view accidents');
    }

    /**
     * Determine whether the accident can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create accidents');
    }

    /**
     * Determine whether the accident can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Accident  $model
     * @return mixed
     */
    public function update(User $user, Accident $model)
    {
        return $user->hasPermissionTo('update accidents');
    }

    /**
     * Determine whether the accident can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Accident  $model
     * @return mixed
     */
    public function delete(User $user, Accident $model)
    {
        return $user->hasPermissionTo('delete accidents');
    }

    /**
     * Determine whether the accident can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Accident  $model
     * @return mixed
     */
    public function restore(User $user, Accident $model)
    {
        return false;
    }

    /**
     * Determine whether the accident can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Accident  $model
     * @return mixed
     */
    public function forceDelete(User $user, Accident $model)
    {
        return false;
    }
}
