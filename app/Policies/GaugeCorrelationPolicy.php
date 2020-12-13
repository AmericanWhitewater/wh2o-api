<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugeCorrelation;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugeCorrelationPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugeCorrelation can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugecorrelations');
    }

    /**
     * Determine whether the gaugeCorrelation can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelation  $model
     * @return mixed
     */
    public function view(User $user, GaugeCorrelation $model)
    {
        return $user->hasPermissionTo('view gaugecorrelations');
    }

    /**
     * Determine whether the gaugeCorrelation can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugecorrelations');
    }

    /**
     * Determine whether the gaugeCorrelation can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelation  $model
     * @return mixed
     */
    public function update(User $user, GaugeCorrelation $model)
    {
        return $user->hasPermissionTo('update gaugecorrelations');
    }

    /**
     * Determine whether the gaugeCorrelation can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelation  $model
     * @return mixed
     */
    public function delete(User $user, GaugeCorrelation $model)
    {
        return $user->hasPermissionTo('delete gaugecorrelations');
    }

    /**
     * Determine whether the gaugeCorrelation can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelation  $model
     * @return mixed
     */
    public function restore(User $user, GaugeCorrelation $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugeCorrelation can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeCorrelation  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugeCorrelation $model)
    {
        return false;
    }
}
