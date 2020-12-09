<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Accident;
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

$factory->define(Accident::class, function (Faker $faker) {
    return [
        'victim_name' => $faker->name,
        'accident_date' => now(),
        'river' => $faker->name,
        'section' => $faker->name,
        'location' => $faker->name,
        'water_level' => null,
        'rel_level' => null,
        'difficulty' => null,
        'age' => null,
    ];
});
