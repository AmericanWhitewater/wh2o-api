<?php

namespace App;
use App\Models\BaseModel;

class Rapid extends BaseModel
{
    protected $fillable = [
        'approximate',
        'rlat',
        'rloc',
        'rlon',
        'distance',
        'photoid',
        'revision',
        'videoid',
        'isaccess',
        'ishazard',
        'isplayspot',
        'isportage',
        'isputin',
        'istakeout',
        'iswaterfall',
        'isother',
        'israpid',
        'difficulty',
        'name',
        'description',
        'reach_id',
    ];

    protected $casts = [
        'approximate' => 'boolean',
    ];

    public function reach()
    {
        return $this->belongsTo(Reach::class);
    }
}
