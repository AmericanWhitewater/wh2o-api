<?php

namespace App;
use App\Models\BaseModel;

class Cause extends BaseModel
{
    public $primaryKey = 'id';

    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accident_causes');
    }
}
