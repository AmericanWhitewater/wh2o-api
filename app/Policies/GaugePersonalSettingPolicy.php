<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GaugePersonalSetting;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaugePersonalSettingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gaugePersonalSetting can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gaugepersonalsettings');
    }

    /**
     * Determine whether the gaugePersonalSetting can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugePersonalSetting  $model
     * @return mixed
     */
    public function view(User $user, GaugePersonalSetting $model)
    {
        return $user->hasPermissionTo('view gaugepersonalsettings');
    }

    /**
     * Determine whether the gaugePersonalSetting can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gaugepersonalsettings');
    }

    /**
     * Determine whether the gaugePersonalSetting can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugePersonalSetting  $model
     * @return mixed
     */
    public function update(User $user, GaugePersonalSetting $model)
    {
        return $user->hasPermissionTo('update gaugepersonalsettings');
    }

    /**
     * Determine whether the gaugePersonalSetting can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugePersonalSetting  $model
     * @return mixed
     */
    public function delete(User $user, GaugePersonalSetting $model)
    {
        return $user->hasPermissionTo('delete gaugepersonalsettings');
    }

    /**
     * Determine whether the gaugePersonalSetting can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugePersonalSetting  $model
     * @return mixed
     */
    public function restore(User $user, GaugePersonalSetting $model)
    {
        return false;
    }

    /**
     * Determine whether the gaugePersonalSetting can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GaugePersonalSetting  $model
     * @return mixed
     */
    public function forceDelete(User $user, GaugePersonalSetting $model)
    {
        return false;
    }
}
