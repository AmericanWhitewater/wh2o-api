<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugeReadingMetric extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['shortkey', 'unit', 'name', 'format', 'sortorder'];

    protected $searchableFields = ['*'];

    protected $table = 'gauge_reading_metrics';

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'id');
    }
}
