<?php

namespace App;
use App\Models\BaseModel;

class GaugeReadingMetric extends BaseModel
{

    public $primaryKey = 'id';

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'id');
    }
}
