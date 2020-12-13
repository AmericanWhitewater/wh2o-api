<?php

namespace App;
use App\Models\BaseModel;

class GaugeCorrelation extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = [
        'sourceid',
        'targetid',
        'time_adjustments',
        'comment',
        'metricid',
        'estimated',
        'deleted',
        'excluded',
        'uid',
    ];

    protected $table = 'gauge_dependent_headers';

    protected $casts = [
        'estimated' => 'boolean',
        'deleted' => 'boolean',
        'excluded' => 'boolean',
    ];

    public function target()
    {
        return $this->hasOne(Gauge::class, 'id');
    }

    public function source()
    {
        return $this->hasOne(Gauge::class, 'id');
    }

    public function metric()
    {
        return $this->hasOne(GaugeReadingMetric::class, 'id');
    }

    public function ranges()
    {
        return $this->hasMany(GaugeCorrelationRange::class, 'ghid');
    }
}
