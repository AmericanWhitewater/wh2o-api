<?php

namespace App;
use App\Models\BaseModel;

class News extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['expiration', 'type', 'priority'];
    
    protected $casts = [
        'expiration' => 'date',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class, 'news_article_id');
    }
}
