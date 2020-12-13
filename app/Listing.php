<?php

namespace App;
use App\Models\BaseModel;

class Listing extends BaseModel
{

    public $primaryKey = 'id';

    protected $fillable = ['listing', 'name', 'arealookup', 'public'];
}
