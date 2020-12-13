<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Gauge;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gauge can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gauges');
    }

    /**
     * Determine whether the gauge can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Gauge  $model
     * @return mixed
     */
    public function view(User $user, Gauge $model)
    {
        return $user->hasPermissionTo('view gauges');
    }

    /**
     * Determine whether the gauge can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gauges');
    }

    /**
     * Determine whether the gauge can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Gauge  $model
     * @return mixed
     */
    public function update(User $user, Gauge $model)
    {
        return $user->hasPermissionTo('update gauges');
    }

    /**
     * Determine whether the gauge can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Gauge  $model
     * @return mixed
     */
    public function delete(User $user, Gauge $model)
    {
        return $user->hasPermissionTo('delete gauges');
    }

    /**
     * Determine whether the gauge can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Gauge  $model
     * @return mixed
     */
    public function restore(User $user, Gauge $model)
    {
        return false;
    }

    /**
     * Determine whether the gauge can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Gauge  $model
     * @return mixed
     */
    public function forceDelete(User $user, Gauge $model)
    {
        return false;
    }
}
