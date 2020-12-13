<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Photo;
use Illuminate\Auth\Access\HandlesAuthorization;

class PhotoPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the photo can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list photos');
    }

    /**
     * Determine whether the photo can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Photo  $model
     * @return mixed
     */
    public function view(User $user, Photo $model)
    {
        return $user->hasPermissionTo('view photos');
    }

    /**
     * Determine whether the photo can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create photos');
    }

    /**
     * Determine whether the photo can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Photo  $model
     * @return mixed
     */
    public function update(User $user, Photo $model)
    {
        return $user->hasPermissionTo('update photos');
    }

    /**
     * Determine whether the photo can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Photo  $model
     * @return mixed
     */
    public function delete(User $user, Photo $model)
    {
        return $user->hasPermissionTo('delete photos');
    }

    /**
     * Determine whether the photo can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Photo  $model
     * @return mixed
     */
    public function restore(User $user, Photo $model)
    {
        return false;
    }

    /**
     * Determine whether the photo can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Photo  $model
     * @return mixed
     */
    public function forceDelete(User $user, Photo $model)
    {
        return false;
    }
}
