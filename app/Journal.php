<?php

namespace App;
use App\Models\BaseModel;

class Journal extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = [
        'arttitle',
        'artdate',
        'startpage',
        'endpage',
        'volume',
        'issuenumber',
        'issueyear',
        'scanner_uid',
        'pdfsize',
        'forpublic',
    ];
}
