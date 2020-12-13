<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Factor extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['factor'];

    protected $searchableFields = ['*'];

    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accident_factors');
    }
}
