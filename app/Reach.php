<?php

namespace App;
use App\Models\BaseModel;

class Reach extends BaseModel
{
    public function accident()
    {
        return $this->belongsTo(Accident::class);
    }
}
