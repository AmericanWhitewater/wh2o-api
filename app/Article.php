<?php

namespace App;
use App\Models\BaseModel;

class Article extends BaseModel
{
    public $primaryKey = 'id';

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

    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
