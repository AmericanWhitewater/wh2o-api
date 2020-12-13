<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    public $primaryKey = 'documentid';

    protected $fillable = [
        'abstract',
        'description',
        'keywords',
        'editdate',
        'deleted',
        'title',
        'shortname',
        'uid',
        'recipient',
        'author',
        'document',
        'document_size',
    ];

    protected $searchableFields = ['*'];

    protected $casts = [
        'editdate' => 'date',
    ];

    public function uid()
    {
        return $this->hasOne(User::class, 'uid');
    }
}
