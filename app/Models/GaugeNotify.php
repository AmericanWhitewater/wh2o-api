<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugeNotify extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'uid',
        'min',
        'metric',
        'show',
        'gauge_id',
        'asap',
        'down',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'gauge_notifies';

    protected $casts = [
        'show' => 'boolean',
        'asap' => 'boolean',
        'down' => 'boolean',
    ];
}
