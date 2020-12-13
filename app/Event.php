<?php

namespace App;
use App\Models\BaseModel;

class Event extends BaseModel
{
    public $primaryKey = 'id';

    protected $fillable = [
        'event_id',
        'title',
        'city',
        'description',
        'cat',
        'uid',
        'state',
        'url',
        'orgname',
        'orgaddress',
        'orgphone',
        'orgfax',
        'orgemail',
        'site',
        'rivid',
        'expectpart',
        'expectspec',
        'issue',
        'media',
        'nowreventinfo',
        'contact_id',
        'html_description',
        'retired',
    ];

    public function id()
    {
        return $this->hasMany(EventDate::class);
    }

    public function eventNotify()
    {
        return $this->belongsTo(EventNotify::class, 'event_id');
    }
}
