<?php

namespace App\Policies;

use App\Models\User;
use App\Models\State;
use Illuminate\Auth\Access\HandlesAuthorization;

class StatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the state can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list states');
    }

    /**
     * Determine whether the state can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\State  $model
     * @return mixed
     */
    public function view(User $user, State $model)
    {
        return $user->hasPermissionTo('view states');
    }

    /**
     * Determine whether the state can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create states');
    }

    /**
     * Determine whether the state can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\State  $model
     * @return mixed
     */
    public function update(User $user, State $model)
    {
        return $user->hasPermissionTo('update states');
    }

    /**
     * Determine whether the state can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\State  $model
     * @return mixed
     */
    public function delete(User $user, State $model)
    {
        return $user->hasPermissionTo('delete states');
    }

    /**
     * Determine whether the state can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\State  $model
     * @return mixed
     */
    public function restore(User $user, State $model)
    {
        return false;
    }

    /**
     * Determine whether the state can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\State  $model
     * @return mixed
     */
    public function forceDelete(User $user, State $model)
    {
        return false;
    }
}
