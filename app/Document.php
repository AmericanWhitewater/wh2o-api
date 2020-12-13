<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    public $primaryKey = 'documentid';

    public function uid()
    {
        return $this->hasOne(User::class, 'uid');
    }
}
