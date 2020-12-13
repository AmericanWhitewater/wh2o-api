<?php

namespace App;
use App\Models\BaseModel;

class News extends BaseModel
{

    public $primaryKey = 'id';

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
