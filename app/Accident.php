<?php

namespace App;
use App\Models\BaseModel;

class Accident extends BaseModel
{
    public $primaryKey = 'accident_id';

    protected $fillable = [
        'accident_date',
        'victim_name',
        'reach_id',
        'country_abbr',
        'state',
        'river',
        'section',
        'location',
        'water_level',
        'rel_level',
        'difficulty',
        'age',
    ];

    protected $searchableFields = ['*'];

    protected $hidden = ['accident_id'];

    protected $casts = [
        'accident_date' => 'datetime',
    ];

    
    public function reach()
    {
        return $this->hasOne(Reach::class);
    }

    public function accidentsFactors()
    {
        return $this->belongsToMany(Factor::class, 'accident_factors');
    }

    public function causes()
    {
        return $this->belongsToMany(Cause::class, 'accident_causes');
    }

    public function injuries()
    {
        return $this->belongsToMany(Injury::class, 'accidents_injury');
    }
}
