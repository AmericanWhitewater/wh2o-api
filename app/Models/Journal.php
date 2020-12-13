<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Journal extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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

    protected $searchableFields = ['*'];
}
