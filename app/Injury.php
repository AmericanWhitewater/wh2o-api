<?php

namespace App;
use App\Models\BaseModel;

class Injury extends BaseModel
{
    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accidents_injury');
    }
}
