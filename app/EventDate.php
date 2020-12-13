<?php

namespace App;
use App\Models\BaseModel;
class EventDate extends BaseModel
{

    public $primaryKey = 'id';

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
