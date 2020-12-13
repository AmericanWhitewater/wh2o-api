<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'news_article_id',
        'title',
        'author',
        'abstract',
        'abstract_photo',
        'icon',
        'has_contents',
        'contents',
        'contents_photo',
        'contact',
        'posted',
        'short_name',
        'uid',
        'release_date',
        'deleted',
    ];

    protected $searchableFields = ['*'];

    protected $casts = [
        'posted' => 'date',
        'release_date' => 'date',
    ];

    public function newsArticle()
    {
        return $this->belongsTo(News::class, 'news_article_id');
    }
}
