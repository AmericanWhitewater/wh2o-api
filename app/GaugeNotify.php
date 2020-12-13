<?php

namespace App;
use App\Models\BaseModel;

class GaugeNotify extends BaseModel
{

    public $primaryKey = 'id';
    
    protected $fillable = [
        'uid',
        'min',
        'metric',
        'show',
        'gauge_id',
        'asap',
        'down',
    ];

    protected $table = 'gauge_notify';

    protected $casts = [
        'show' => 'boolean',
        'asap' => 'boolean',
        'down' => 'boolean',
    ];
}
