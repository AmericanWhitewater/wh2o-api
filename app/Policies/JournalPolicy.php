<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Journal;
use Illuminate\Auth\Access\HandlesAuthorization;

class JournalPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the journal can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list journals');
    }

    /**
     * Determine whether the journal can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Journal  $model
     * @return mixed
     */
    public function view(User $user, Journal $model)
    {
        return $user->hasPermissionTo('view journals');
    }

    /**
     * Determine whether the journal can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create journals');
    }

    /**
     * Determine whether the journal can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Journal  $model
     * @return mixed
     */
    public function update(User $user, Journal $model)
    {
        return $user->hasPermissionTo('update journals');
    }

    /**
     * Determine whether the journal can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Journal  $model
     * @return mixed
     */
    public function delete(User $user, Journal $model)
    {
        return $user->hasPermissionTo('delete journals');
    }

    /**
     * Determine whether the journal can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Journal  $model
     * @return mixed
     */
    public function restore(User $user, Journal $model)
    {
        return false;
    }

    /**
     * Determine whether the journal can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Journal  $model
     * @return mixed
     */
    public function forceDelete(User $user, Journal $model)
    {
        return false;
    }
}
