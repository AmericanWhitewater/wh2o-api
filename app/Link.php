<?php

namespace App;
use App\Models\BaseModel;

class Link extends BaseModel
{
public $primaryKey = 'id';

    protected $fillable = ['sourcecomp', 'sourceid', 'targetcomp', 'targetid'];

    protected $table = 'linker_lists';
}
