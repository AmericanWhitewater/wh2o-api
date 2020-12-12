<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugeSource;
use Faker\Generator as Faker;

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

$factory->define(GaugeSource::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000),
        'source' => 'source',
        'title' => 'title',
        'url' => $faker->url,
        'update_type' => 'h',
        'update_frequency' => null,
        'update_start_time' => $faker->time,
        'data' => null,
        'populated' => null,
        'disclaimer' => null
    ];
});
