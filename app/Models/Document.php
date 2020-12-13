<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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
