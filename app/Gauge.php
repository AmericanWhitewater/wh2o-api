<?php

namespace App;
use App\Models\BaseModel;

class Gauge extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = [
        'source_id',
        'source',
        'name',
        'huc',
        'update_frequency',
        'county',
        'glat',
        'glon',
        'update_start_time',
        'header_updated',
        'timezone',
        'loc',
        'data',
        'update_calculated_frequency',
        'clean_date',
        'enabled',
        'id',
    ];

    protected $table = 'gauge_headers';

    protected $casts = [
        'header_updated' => 'date',
        'clean_date' => 'date',
        'enabled' => 'boolean',
    ];

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'id');
    }
}
