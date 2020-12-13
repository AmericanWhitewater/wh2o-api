<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class News extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

    protected $fillable = ['expiration', 'type', 'priority'];

    protected $searchableFields = ['*'];

    protected $casts = [
        'expiration' => 'date',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class, 'news_article_id');
    }
}
