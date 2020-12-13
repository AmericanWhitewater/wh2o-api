<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Reach;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReachPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the reach can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list reaches');
    }

    /**
     * Determine whether the reach can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Reach  $model
     * @return mixed
     */
    public function view(User $user, Reach $model)
    {
        return $user->hasPermissionTo('view reaches');
    }

    /**
     * Determine whether the reach can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create reaches');
    }

    /**
     * Determine whether the reach can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Reach  $model
     * @return mixed
     */
    public function update(User $user, Reach $model)
    {
        return $user->hasPermissionTo('update reaches');
    }

    /**
     * Determine whether the reach can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Reach  $model
     * @return mixed
     */
    public function delete(User $user, Reach $model)
    {
        return $user->hasPermissionTo('delete reaches');
    }

    /**
     * Determine whether the reach can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Reach  $model
     * @return mixed
     */
    public function restore(User $user, Reach $model)
    {
        return false;
    }

    /**
     * Determine whether the reach can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Reach  $model
     * @return mixed
     */
    public function forceDelete(User $user, Reach $model)
    {
        return false;
    }
}
