<?php

namespace App;
use App\Models\BaseModel;

class Accident extends BaseModel
{
    public $primaryKey = 'id';

    protected $fillable = [
        'accident_date', 'victim_name', 'reach_id', 'country_abbr', 'state', 'river', 'section', 'location', 'water_level', 'rel_level', 'difficulty', 'age',
    ];
}
