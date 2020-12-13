<?php

namespace App;
use App\Models\BaseModel;
class Factor extends BaseModel
{
    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accident_factors');
    }
}
