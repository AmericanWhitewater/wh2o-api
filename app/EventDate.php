<?php

namespace App;
use App\Models\BaseModel;
class EventDate extends BaseModel
{

    public $primaryKey = 'id';

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
