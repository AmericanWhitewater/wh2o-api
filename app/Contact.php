<?php

namespace App;
use App\Models\BaseModel;

class Contact extends BaseModel
{
    public $primaryKey = 'id';

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
}
