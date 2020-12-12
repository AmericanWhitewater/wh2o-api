<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugeCorrelation;
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

$factory->define(GaugeCorrelation::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,1000),
        'sourceid' => $faker->unique()->numberBetween(1,1000),
        'targetid' => $faker->unique()->numberBetween(1,1000),
        'time_adjustments' => null,
        'comment' => $faker->word,
        'metricid' => rand(1, 10)
    ];
});
