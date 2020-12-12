<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Rapid;
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

$factory->define(Rapid::class, function (Faker $faker) {
    return [
        'approximate' => true,
        'deleted' => false,
        'description' => $faker->text,
        'difficulty' => null,
        'distance' => 0,
        'id' => $faker->unique()->numberBetween(1,200000),
        'isaccess' => null,
        'ishazard' => null,
        'isportage' => null,
        'isputin' => null,
        'istakeout' => null,
        'name' => $faker->word,
        'photoid' => null,
        'photoid' => null,
        'photoid' => null,
        'reachid' => rand(1,1000),
        'videoid' => null,
    ];
});
