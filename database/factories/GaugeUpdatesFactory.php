<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugeUpdates;
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

$factory->define(GaugeUpdates::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000000),
        'gauge_id' => $faker->numberBetween(1,1000),
        'metric' => rand(1, 8),
        'lobs_time' => $faker->date,
        'lobs_id'=> rand(1, 10000),
        'lobs_reading' => $faker->numberBetween(1,100000),
        'obs_time' => $faker->date,
        'obs_id'=> rand(1, 10000),
        'obs_reading' => $faker->numberBetween(1,100000),
        'obs_data' => $faker->word,
        'write_sequence' => rand(1, 10000),
        'obs_ref' => rand(1, 10000),
        'last_journal_date' => $faker->date,
        'gd_ref' => rand(1, 1000),
    ];
});
