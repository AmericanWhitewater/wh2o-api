<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Permit;
use Illuminate\Auth\Access\HandlesAuthorization;

class PermitPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the permit can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list permits');
    }

    /**
     * Determine whether the permit can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Permit  $model
     * @return mixed
     */
    public function view(User $user, Permit $model)
    {
        return $user->hasPermissionTo('view permits');
    }

    /**
     * Determine whether the permit can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create permits');
    }

    /**
     * Determine whether the permit can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Permit  $model
     * @return mixed
     */
    public function update(User $user, Permit $model)
    {
        return $user->hasPermissionTo('update permits');
    }

    /**
     * Determine whether the permit can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Permit  $model
     * @return mixed
     */
    public function delete(User $user, Permit $model)
    {
        return $user->hasPermissionTo('delete permits');
    }

    /**
     * Determine whether the permit can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Permit  $model
     * @return mixed
     */
    public function restore(User $user, Permit $model)
    {
        return false;
    }

    /**
     * Determine whether the permit can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Permit  $model
     * @return mixed
     */
    public function forceDelete(User $user, Permit $model)
    {
        return false;
    }
}
