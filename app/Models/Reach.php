<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reach extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'accident_id',
        'river',
        'section',
        'altname',
        'county',
        'zipcode',
        'length',
        'avggradient',
        'maxgradient',
        'agency',
        'gaugeinfo',
        'description',
        'photoid',
        'permitid',
        'huc',
        'plat',
        'plon',
        'prrn',
        'tlat',
        'tlon',
        'trrn',
        'skid',
        'status',
        'edited',
        'is_final',
        'revision',
        'class',
        'ploc',
        'tloc',
        'was_final',
        'thumboverride',
        'shuttledetails',
        'abstract',
        'direction_default',
        'custom_destination',
        'revision_comment',
        'permiturl',
        'permitinfo',
        'image_override',
        'geom',
    ];

    protected $searchableFields = ['*'];

    protected $casts = [
        'edited' => 'date',
        'is_final' => 'boolean',
        'was_final' => 'boolean',
        'thumboverride' => 'boolean',
    ];

    public function accident()
    {
        return $this->belongsTo(Accident::class);
    }

    public function poIs()
    {
        return $this->hasMany(Rapid::class);
    }

    public function states()
    {
        return $this->hasMany(State::class);
    }

    public function permits()
    {
        return $this->hasMany(Permit::class);
    }

    public function contributors()
    {
        return $this->hasMany(Contributor::class);
    }
}
