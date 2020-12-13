<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Permit extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'agency',
        'url',
        'start_date',
        'end_date',
        'reach_id',
    ];

    protected $searchableFields = ['*'];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function reach()
    {
        return $this->belongsTo(Reach::class);
    }
}
