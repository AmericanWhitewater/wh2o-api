<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugeUpdate;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugeUpdatePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugeUpdate can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugeupdates');
    }

    /**
     * Determine whether the gaugeUpdate can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeUpdate  $model
     * @return mixed
     */
    public function view(User $user, GaugeUpdate $model)
    {
        return $user->hasPermissionTo('view gaugeupdates');
    }

    /**
     * Determine whether the gaugeUpdate can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugeupdates');
    }

    /**
     * Determine whether the gaugeUpdate can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeUpdate  $model
     * @return mixed
     */
    public function update(User $user, GaugeUpdate $model)
    {
        return $user->hasPermissionTo('update gaugeupdates');
    }

    /**
     * Determine whether the gaugeUpdate can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeUpdate  $model
     * @return mixed
     */
    public function delete(User $user, GaugeUpdate $model)
    {
        return $user->hasPermissionTo('delete gaugeupdates');
    }

    /**
     * Determine whether the gaugeUpdate can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeUpdate  $model
     * @return mixed
     */
    public function restore(User $user, GaugeUpdate $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugeUpdate can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeUpdate  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugeUpdate $model)
    {
        return false;
    }
}
