<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugeReadingMetric;
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

$factory->define(GaugeReadingMetric::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000),
    ];
});
