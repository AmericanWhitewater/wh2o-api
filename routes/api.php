<?php

use Illuminate\Support\Facades\Route;
use Orion\Facades\Orion;
use App\Http\Controllers\API\AccidentController;

Route::group(['as' => 'api.'], function() {
    Orion::resource('accident', AccidentController::class);
});