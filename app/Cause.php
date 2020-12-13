<?php

namespace App;
use App\Models\BaseModel;

class Cause extends BaseModel
{
    public $primaryKey = 'id';

    protected $fillable = ['cause'];

    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accident_causes');
    }
}
