<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Accident extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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
