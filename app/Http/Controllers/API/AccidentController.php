<?php

namespace App\Http\Controllers\Api;

use App\Models\Accident;
use Orion\Http\Controllers\Controller;

class AccidentController extends Controller
{
  protected $model = Accident::class;
}