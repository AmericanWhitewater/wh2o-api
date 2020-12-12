<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugeNotify;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(GaugeNotify::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000),
        'uid' => $faker->numberBetween(1,1000),
        'metric' => rand(1, 10),
        'min' => rand(1, 10),
        'show' => true,
        'gauge_id' => rand(1,1000),
        'asap' => true,
        'down' => false
    ];
});
