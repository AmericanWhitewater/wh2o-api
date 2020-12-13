<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Gauge extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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

    protected $searchableFields = ['*'];

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
