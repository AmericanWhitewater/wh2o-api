<?php

namespace App;
use App\Models\BaseModel;

class GaugeSource extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = [
        'source',
        'title',
        'url',
        'update_type',
        'update_frequency',
        'update_start_time',
        'data',
        'populated',
        'disclaimer',
    ];

    protected $table = 'gauge_sources';

    protected $casts = [
        'populated' => 'date',
    ];
}
