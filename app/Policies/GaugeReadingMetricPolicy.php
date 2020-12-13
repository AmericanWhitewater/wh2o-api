<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugeReadingMetric;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugeReadingMetricPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugeReadingMetric can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugereadingmetrics');
    }

    /**
     * Determine whether the gaugeReadingMetric can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeReadingMetric  $model
     * @return mixed
     */
    public function view(User $user, GaugeReadingMetric $model)
    {
        return $user->hasPermissionTo('view gaugereadingmetrics');
    }

    /**
     * Determine whether the gaugeReadingMetric can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugereadingmetrics');
    }

    /**
     * Determine whether the gaugeReadingMetric can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeReadingMetric  $model
     * @return mixed
     */
    public function update(User $user, GaugeReadingMetric $model)
    {
        return $user->hasPermissionTo('update gaugereadingmetrics');
    }

    /**
     * Determine whether the gaugeReadingMetric can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeReadingMetric  $model
     * @return mixed
     */
    public function delete(User $user, GaugeReadingMetric $model)
    {
        return $user->hasPermissionTo('delete gaugereadingmetrics');
    }

    /**
     * Determine whether the gaugeReadingMetric can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeReadingMetric  $model
     * @return mixed
     */
    public function restore(User $user, GaugeReadingMetric $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugeReadingMetric can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugeReadingMetric  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugeReadingMetric $model)
    {
        return false;
    }
}
