<?php

namespace App\Policies;

use App\Models\User;
use App\Models\EventDate;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventDatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the eventDate can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list eventdates');
    }

    /**
     * Determine whether the eventDate can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventDate  $model
     * @return mixed
     */
    public function view(User $user, EventDate $model)
    {
        return $user->hasPermissionTo('view eventdates');
    }

    /**
     * Determine whether the eventDate can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create eventdates');
    }

    /**
     * Determine whether the eventDate can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventDate  $model
     * @return mixed
     */
    public function update(User $user, EventDate $model)
    {
        return $user->hasPermissionTo('update eventdates');
    }

    /**
     * Determine whether the eventDate can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventDate  $model
     * @return mixed
     */
    public function delete(User $user, EventDate $model)
    {
        return $user->hasPermissionTo('delete eventdates');
    }

    /**
     * Determine whether the eventDate can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventDate  $model
     * @return mixed
     */
    public function restore(User $user, EventDate $model)
    {
        return false;
    }

    /**
     * Determine whether the eventDate can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\EventDate  $model
     * @return mixed
     */
    public function forceDelete(User $user, EventDate $model)
    {
        return false;
    }
}
