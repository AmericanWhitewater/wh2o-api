<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GageSource extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'source',
        'title',
        'url',
        'update_type',
        'update_frequency',
        'update_start_time',
        'data',
        'populated',
        'disclaimer',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'gage_sources';

    protected $casts = [
        'populated' => 'date',
    ];
}
