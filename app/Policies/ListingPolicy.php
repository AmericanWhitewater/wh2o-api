<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Listing;
use Illuminate\Auth\Access\HandlesAuthorization;

class ListingPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the listing can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list listings');
    }

    /**
     * Determine whether the listing can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Listing  $model
     * @return mixed
     */
    public function view(User $user, Listing $model)
    {
        return $user->hasPermissionTo('view listings');
    }

    /**
     * Determine whether the listing can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create listings');
    }

    /**
     * Determine whether the listing can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Listing  $model
     * @return mixed
     */
    public function update(User $user, Listing $model)
    {
        return $user->hasPermissionTo('update listings');
    }

    /**
     * Determine whether the listing can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Listing  $model
     * @return mixed
     */
    public function delete(User $user, Listing $model)
    {
        return $user->hasPermissionTo('delete listings');
    }

    /**
     * Determine whether the listing can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Listing  $model
     * @return mixed
     */
    public function restore(User $user, Listing $model)
    {
        return false;
    }

    /**
     * Determine whether the listing can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Listing  $model
     * @return mixed
     */
    public function forceDelete(User $user, Listing $model)
    {
        return false;
    }
}
