<?php

namespace App\Policies;

use App\Models\User;
use App\Models\GageSource;
use Illuminate\Auth\Access\HandlesAuthorization;

class GageSourcePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the gageSource can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list gagesources');
    }

    /**
     * Determine whether the gageSource can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GageSource  $model
     * @return mixed
     */
    public function view(User $user, GageSource $model)
    {
        return $user->hasPermissionTo('view gagesources');
    }

    /**
     * Determine whether the gageSource can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create gagesources');
    }

    /**
     * Determine whether the gageSource can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GageSource  $model
     * @return mixed
     */
    public function update(User $user, GageSource $model)
    {
        return $user->hasPermissionTo('update gagesources');
    }

    /**
     * Determine whether the gageSource can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GageSource  $model
     * @return mixed
     */
    public function delete(User $user, GageSource $model)
    {
        return $user->hasPermissionTo('delete gagesources');
    }

    /**
     * Determine whether the gageSource can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GageSource  $model
     * @return mixed
     */
    public function restore(User $user, GageSource $model)
    {
        return false;
    }

    /**
     * Determine whether the gageSource can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\GageSource  $model
     * @return mixed
     */
    public function forceDelete(User $user, GageSource $model)
    {
        return false;
    }
}
