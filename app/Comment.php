<?php

namespace App;
use App\Models\BaseModel;

class Comment extends BaseModel
{
    public $primaryKey = 'id';

    protected $hidden = ['revision'];

    public function user()
    {
        return $this->hasOne(User::class, 'uid');
    }

    public function post()
    {
        return $this->hasOne(Post::class, 'uid');
    }
}
