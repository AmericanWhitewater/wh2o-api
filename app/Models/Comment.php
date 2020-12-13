<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'uid',
        'sectionid',
        'name',
        'comments',
        'posted',
        'section',
        'type',
        'deleted',
        'duid',
        'is_final',
        'is_private',
    ];

    protected $searchableFields = ['*'];

    protected $hidden = ['revision'];

    protected $casts = [
        'posted' => 'date',
        'deleted' => 'date',
        'is_final' => 'boolean',
        'is_private' => 'boolean',
    ];

    public function user()
    {
        return $this->hasOne(User::class, 'uid');
    }
}
