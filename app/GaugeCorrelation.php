<?php

namespace App;
use App\Models\BaseModel;

class GaugeCorrelation extends BaseModel
{
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
