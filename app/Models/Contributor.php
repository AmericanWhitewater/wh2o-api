<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contributor extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['uid', 'edit', 'reported', 'reach_id'];

    protected $searchableFields = ['*'];

    protected $casts = [
        'reported' => 'boolean',
    ];

    public function reach()
    {
        return $this->belongsTo(Reach::class);
    }
}
