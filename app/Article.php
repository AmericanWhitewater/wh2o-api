<?php

namespace App;
use App\Models\BaseModel;

class Article extends BaseModel
{
    public $primaryKey = 'id';

    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
