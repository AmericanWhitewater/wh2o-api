<?php

namespace App;
use App\Models\BaseModel;

class Post extends BaseModel
{
    public function comment()
    {
        return $this->belongsTo(Comment::class, 'uid');
    }
}
