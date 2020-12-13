<?php

namespace App;
use App\Models\BaseModel;

class Comment extends BaseModel
{
    public $primaryKey = 'id';

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

    public function post()
    {
        return $this->hasOne(Post::class, 'uid');
    }
}
