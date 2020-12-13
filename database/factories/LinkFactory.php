<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Link;
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

$factory->define(Link::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,2000),
        'sourcecomp' => $faker->word,
        'sourceid' => rand(1,2000),
        'targetcomp' => $faker->word,
        'targetid' => rand(1,2000),
        'mutual' => rand(1,2000),
        'expire_date' => $faker->date,
    ];
});
