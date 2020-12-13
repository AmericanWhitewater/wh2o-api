<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\GaugePersonalSettings;
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

$factory->define(GaugePersonalSettings::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,10000),
        'uid' => $faker->numberBetween(1,1000),
        'starttime' => $faker->time,
        'endtime' => $faker->time,
        'tz' => null,
        'email' => $faker->email,
        'format' => null
    ];
});
