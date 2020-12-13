<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugeCorrelationRange extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['ghid'];

    protected $searchableFields = ['*'];

    protected $table = 'gauge_dependents';

    public function gaugeCorrelation()
    {
        return $this->belongsTo(GaugeCorrelation::class, 'ghid');
    }
}
