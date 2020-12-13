<?php

namespace App;
use App\Models\BaseModel;

class GaugeCorrelationRange extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['ghid'];

    protected $table = 'gauge_dependents';

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'ghid');
    }
}
