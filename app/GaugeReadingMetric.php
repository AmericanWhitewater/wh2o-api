<?php

namespace App;
use App\Models\BaseModel;

class GaugeReadingMetric extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['shortkey', 'unit', 'name', 'format', 'sortorder'];

    protected $table = 'gauge_reading_metrics';

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'id');
    }
}
