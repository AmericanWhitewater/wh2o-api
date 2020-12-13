<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Affiliate extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'last',
        'url',
        'con_email',
        'members',
        'contact',
        'abstract',
        'description',
        'reaches',
        'volunteer',
        'city',
        'state',
        'expiration',
        'member_id',
        'deleted',
    ];

    protected $searchableFields = ['*'];
}
