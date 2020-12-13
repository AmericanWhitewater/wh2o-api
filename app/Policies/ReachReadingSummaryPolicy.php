<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ReachReadingSummary;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReachReadingSummaryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the reachReadingSummary can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list reachreadingsummaries');
    }

    /**
     * Determine whether the reachReadingSummary can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\ReachReadingSummary  $model
     * @return mixed
     */
    public function view(User $user, ReachReadingSummary $model)
    {
        return $user->hasPermissionTo('view reachreadingsummaries');
    }

    /**
     * Determine whether the reachReadingSummary can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create reachreadingsummaries');
    }

    /**
     * Determine whether the reachReadingSummary can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\ReachReadingSummary  $model
     * @return mixed
     */
    public function update(User $user, ReachReadingSummary $model)
    {
        return $user->hasPermissionTo('update reachreadingsummaries');
    }

    /**
     * Determine whether the reachReadingSummary can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\ReachReadingSummary  $model
     * @return mixed
     */
    public function delete(User $user, ReachReadingSummary $model)
    {
        return $user->hasPermissionTo('delete reachreadingsummaries');
    }

    /**
     * Determine whether the reachReadingSummary can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\ReachReadingSummary  $model
     * @return mixed
     */
    public function restore(User $user, ReachReadingSummary $model)
    {
        return false;
    }

    /**
     * Determine whether the reachReadingSummary can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\ReachReadingSummary  $model
     * @return mixed
     */
    public function forceDelete(User $user, ReachReadingSummary $model)
    {
        return false;
    }
}
