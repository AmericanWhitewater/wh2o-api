<?php

namespace App;
use App\Models\BaseModel;

class Reach extends BaseModel
{

    public $primaryKey = 'id';

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

    protected $casts = [
        'edited' => 'date',
        'is_final' => 'boolean',
        'was_final' => 'boolean',
        'thumboverride' => 'boolean',
    ];

    public function rapids()
    {
        return $this->hasMany(Rapid::class);
    }
}
