<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugeUpdate extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'gauge_id',
        'metric',
        'lobs_time',
        'lobs_id',
        'lobs_reading',
        'obs_time',
        'obs_id',
        'obs_reading',
        'obs_data',
        'write_sequence',
        'obs_ref',
        'last_journal_date',
        'gd_ref',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'gauge_updates';

    protected $casts = [
        'lobs_time' => 'date',
        'obs_time' => 'date',
        'last_journal_date' => 'date',
    ];
}
