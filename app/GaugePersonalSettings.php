<?php

namespace App;
use App\Models\BaseModel;

class GaugePersonalSettings extends BaseModel
{

    public $primaryKey = 'id';
    
    protected $fillable = [
        'uid',
        'starttime',
        'endtime',
        'tz',
        'email',
        'format',
    ];

    protected $table = 'gauge_personal_settings';
}
