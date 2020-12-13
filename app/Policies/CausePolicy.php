<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Cause;
use Illuminate\Auth\Access\HandlesAuthorization;

class CausePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the cause can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list causes');
    }

    /**
     * Determine whether the cause can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Cause  $model
     * @return mixed
     */
    public function view(User $user, Cause $model)
    {
        return $user->hasPermissionTo('view causes');
    }

    /**
     * Determine whether the cause can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create causes');
    }

    /**
     * Determine whether the cause can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Cause  $model
     * @return mixed
     */
    public function update(User $user, Cause $model)
    {
        return $user->hasPermissionTo('update causes');
    }

    /**
     * Determine whether the cause can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Cause  $model
     * @return mixed
     */
    public function delete(User $user, Cause $model)
    {
        return $user->hasPermissionTo('delete causes');
    }

    /**
     * Determine whether the cause can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Cause  $model
     * @return mixed
     */
    public function restore(User $user, Cause $model)
    {
        return false;
    }

    /**
     * Determine whether the cause can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Cause  $model
     * @return mixed
     */
    public function forceDelete(User $user, Cause $model)
    {
        return false;
    }
}
