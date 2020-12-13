<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class EventNotify extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['uid', 'eventid'];

    protected $searchableFields = ['*'];

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
