<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cause extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = ['cause'];

    protected $searchableFields = ['*'];

    public function accidents()
    {
        return $this->belongsToMany(Accident::class, 'accident_causes');
    }
}
