<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugeCorrelationRange;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugeCorrelationRangePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugeCorrelationRange can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugecorrelationranges');
    }

    /**
     * Determine whether the gaugeCorrelationRange can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelationRange  $model
     * @return mixed
     */
    public function view(User $user, GaugeCorrelationRange $model)
    {
        return $user->hasPermissionTo('view gaugecorrelationranges');
    }

    /**
     * Determine whether the gaugeCorrelationRange can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugecorrelationranges');
    }

    /**
     * Determine whether the gaugeCorrelationRange can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelationRange  $model
     * @return mixed
     */
    public function update(User $user, GaugeCorrelationRange $model)
    {
        return $user->hasPermissionTo('update gaugecorrelationranges');
    }

    /**
     * Determine whether the gaugeCorrelationRange can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelationRange  $model
     * @return mixed
     */
    public function delete(User $user, GaugeCorrelationRange $model)
    {
        return $user->hasPermissionTo('delete gaugecorrelationranges');
    }

    /**
     * Determine whether the gaugeCorrelationRange can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelationRange  $model
     * @return mixed
     */
    public function restore(User $user, GaugeCorrelationRange $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugeCorrelationRange can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelationRange  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugeCorrelationRange $model)
    {
        return false;
    }
}
