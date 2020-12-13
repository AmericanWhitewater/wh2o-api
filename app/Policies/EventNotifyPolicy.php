<?php

namespace App\Policies;

use App\Models\User;
use App\Models\EventNotify;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventNotifyPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the eventNotify can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list eventnotifies');
    }

    /**
     * Determine whether the eventNotify can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventNotify  $model
     * @return mixed
     */
    public function view(User $user, EventNotify $model)
    {
        return $user->hasPermissionTo('view eventnotifies');
    }

    /**
     * Determine whether the eventNotify can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create eventnotifies');
    }

    /**
     * Determine whether the eventNotify can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventNotify  $model
     * @return mixed
     */
    public function update(User $user, EventNotify $model)
    {
        return $user->hasPermissionTo('update eventnotifies');
    }

    /**
     * Determine whether the eventNotify can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventNotify  $model
     * @return mixed
     */
    public function delete(User $user, EventNotify $model)
    {
        return $user->hasPermissionTo('delete eventnotifies');
    }

    /**
     * Determine whether the eventNotify can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventNotify  $model
     * @return mixed
     */
    public function restore(User $user, EventNotify $model)
    {
        return false;
    }

    /**
     * Determine whether the eventNotify can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventNotify  $model
     * @return mixed
     */
    public function forceDelete(User $user, EventNotify $model)
    {
        return false;
    }
}
