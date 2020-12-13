<?php

namespace App\Models;

use App\Models\Scopes\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GaugePersonalSetting extends Model
{
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'uid',
        'starttime',
        'endtime',
        'tz',
        'email',
        'format',
    ];

    protected $searchableFields = ['*'];

    protected $table = 'gauge_personal_settings';
}
