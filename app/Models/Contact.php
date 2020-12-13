<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'uid',
        'type',
        'name',
        'city',
        'address',
        'state',
        'zip',
        'email',
        'phone',
        'fax',
        'contactid',
        'bio',
        'lname',
        'fname',
        'photo',
        'company',
        'position',
        'territory',
        'country_code',
    ];

    protected $searchableFields = ['*'];
}
