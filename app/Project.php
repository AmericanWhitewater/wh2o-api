<?php

namespace App;
use App\Models\BaseModel;

class Project extends BaseModel
{
    public $primaryKey = 'id';

    protected $fillable = ['name', 'description', 'uid', 'shortname'];
}
