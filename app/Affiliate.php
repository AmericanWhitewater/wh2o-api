<?php

namespace App;
use App\Models\BaseModel;

class Affiliate extends BaseModel
{
    public $primaryKey = 'id';

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
}
