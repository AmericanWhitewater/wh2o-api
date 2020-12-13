<?php

namespace App;
use App\Models\BaseModel;

class EventNotify extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['uid', 'eventid'];

    protected $table = 'event_notify';

    public function uid()
    {
        return $this->hasOne(User::class, 'uid');
    }

    public function id()
    {
        return $this->hasOne(Event::class, 'event_id');
    }
}
