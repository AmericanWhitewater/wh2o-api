<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugeNotify;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugeNotifyPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugeNotify can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugenotifies');
    }

    /**
     * Determine whether the gaugeNotify can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeNotify  $model
     * @return mixed
     */
    public function view(User $user, GaugeNotify $model)
    {
        return $user->hasPermissionTo('view gaugenotifies');
    }

    /**
     * Determine whether the gaugeNotify can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugenotifies');
    }

    /**
     * Determine whether the gaugeNotify can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeNotify  $model
     * @return mixed
     */
    public function update(User $user, GaugeNotify $model)
    {
        return $user->hasPermissionTo('update gaugenotifies');
    }

    /**
     * Determine whether the gaugeNotify can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeNotify  $model
     * @return mixed
     */
    public function delete(User $user, GaugeNotify $model)
    {
        return $user->hasPermissionTo('delete gaugenotifies');
    }

    /**
     * Determine whether the gaugeNotify can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeNotify  $model
     * @return mixed
     */
    public function restore(User $user, GaugeNotify $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugeNotify can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeNotify  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugeNotify $model)
    {
        return false;
    }
}
