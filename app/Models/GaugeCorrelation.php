<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugeCorrelation extends Model
{
    use HasFactory;
    use Searchable;

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

    protected $searchableFields = ['*'];

    protected $table = 'gauge_dependent_headers';

    protected $casts = [
        'estimated' => 'boolean',
        'deleted' => 'boolean',
        'excluded' => 'boolean',
    ];

    public function metric()
    {
        return $this->hasOne(GaugeReadingMetric::class, 'id');
    }

    public function ranges()
    {
        return $this->hasMany(GaugeCorrelationRange::class, 'ghid');
    }

    public function gauges()
    {
        return $this->hasMany(Gauge::class, 'id');
    }
}
