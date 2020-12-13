<?php

namespace App;
use App\Models\BaseModel;

class Event extends BaseModel
{
    public $primaryKey = 'id';

    public function id()
    {
        return $this->hasMany(EventDate::class);
    }

    public function eventNotify()
    {
        return $this->belongsTo(EventNotify::class, 'event_id');
    }
}
