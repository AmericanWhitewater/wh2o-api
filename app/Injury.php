<?php

namespace App;
use App\Models\BaseModel;

class Injury extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['injury'];

    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accidents_injury');
    }
}
