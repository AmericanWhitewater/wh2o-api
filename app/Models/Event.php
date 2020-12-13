<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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

    protected $searchableFields = ['*'];

    public function id()
    {
        return $this->hasMany(EventDate::class);
    }

    public function eventNotify()
    {
        return $this->belongsTo(EventNotify::class, 'event_id');
    }
}
