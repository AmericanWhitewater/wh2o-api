<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Gauge;
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

$factory->define(Gauge::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000),
        'source' => rand(1,1000),
        'source_id' => rand(1,1000),
        'name' => $faker->word,
        'huc' => null,
        'update_frequency' => rand(1,1000),
        'county' => null,
        'glat' => null,
        'glon' => null,
        'update_start_time' => $faker->time,
        'header_updated' => $faker->date,
        'timezone' => 'mst',
        'loc' => null,
        'data' => null,
        'update_calculated_frequency' => null,
        'clean_date' => null,
        'enabled' => null
    ];
});
