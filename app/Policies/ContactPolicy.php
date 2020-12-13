<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Contact;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContactPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the contact can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list contacts');
    }

    /**
     * Determine whether the contact can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contact  $model
     * @return mixed
     */
    public function view(User $user, Contact $model)
    {
        return $user->hasPermissionTo('view contacts');
    }

    /**
     * Determine whether the contact can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create contacts');
    }

    /**
     * Determine whether the contact can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contact  $model
     * @return mixed
     */
    public function update(User $user, Contact $model)
    {
        return $user->hasPermissionTo('update contacts');
    }

    /**
     * Determine whether the contact can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contact  $model
     * @return mixed
     */
    public function delete(User $user, Contact $model)
    {
        return $user->hasPermissionTo('delete contacts');
    }

    /**
     * Determine whether the contact can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contact  $model
     * @return mixed
     */
    public function restore(User $user, Contact $model)
    {
        return false;
    }

    /**
     * Determine whether the contact can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Contact  $model
     * @return mixed
     */
    public function forceDelete(User $user, Contact $model)
    {
        return false;
    }
}
