<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rapid extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

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

    protected $searchableFields = ['*'];

    protected $casts = [
        'approximate' => 'boolean',
    ];

    public function reach()
    {
        return $this->belongsTo(Reach::class);
    }
}
