<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Contributor;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContributorPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the contributor can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list contributors');
    }

    /**
     * Determine whether the contributor can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contributor  $model
     * @return mixed
     */
    public function view(User $user, Contributor $model)
    {
        return $user->hasPermissionTo('view contributors');
    }

    /**
     * Determine whether the contributor can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create contributors');
    }

    /**
     * Determine whether the contributor can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contributor  $model
     * @return mixed
     */
    public function update(User $user, Contributor $model)
    {
        return $user->hasPermissionTo('update contributors');
    }

    /**
     * Determine whether the contributor can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contributor  $model
     * @return mixed
     */
    public function delete(User $user, Contributor $model)
    {
        return $user->hasPermissionTo('delete contributors');
    }

    /**
     * Determine whether the contributor can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contributor  $model
     * @return mixed
     */
    public function restore(User $user, Contributor $model)
    {
        return false;
    }

    /**
     * Determine whether the contributor can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contributor  $model
     * @return mixed
     */
    public function forceDelete(User $user, Contributor $model)
    {
        return false;
    }
}
