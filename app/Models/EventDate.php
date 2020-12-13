<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventDate extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'event_id',
        'evdate',
        'detail_description',
        'batchid',
        'starttime',
        'endtime',
        'tz',
        'mincfs',
        'maxcfs',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'event_dates';

    protected $casts = [
        'evdate' => 'date',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
