<?php

namespace App;
use App\Models\BaseModel;

class Gauge extends BaseModel
{

    protected $fillable = ['id', 'state', 'source'];

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'id');
    }
}
