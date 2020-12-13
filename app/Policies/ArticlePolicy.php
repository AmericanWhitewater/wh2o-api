<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Article;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the article can view any models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->hasPermissionTo('list articles');
    }

    /**
     * Determine whether the article can view the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Article  $model
     * @return mixed
     */
    public function view(User $user, Article $model)
    {
        return $user->hasPermissionTo('view articles');
    }

    /**
     * Determine whether the article can create models.
     *
     * @param  App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create articles');
    }

    /**
     * Determine whether the article can update the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Article  $model
     * @return mixed
     */
    public function update(User $user, Article $model)
    {
        return $user->hasPermissionTo('update articles');
    }

    /**
     * Determine whether the article can delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Article  $model
     * @return mixed
     */
    public function delete(User $user, Article $model)
    {
        return $user->hasPermissionTo('delete articles');
    }

    /**
     * Determine whether the article can restore the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Article  $model
     * @return mixed
     */
    public function restore(User $user, Article $model)
    {
        return false;
    }

    /**
     * Determine whether the article can permanently delete the model.
     *
     * @param  App\Models\User  $user
     * @param  App\Models\Article  $model
     * @return mixed
     */
    public function forceDelete(User $user, Article $model)
    {
        return false;
    }
}
