<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class State extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'record_number',
        'name',
        'abbreviation',
        'country',
        'gmi_admin',
        'fips',
        'reach_id',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'geo_states';

    public function reach()
    {
        return $this->belongsTo(Reach::class);
    }
}
