<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Listing;
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

$factory->define(Listing::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,2000),
        'listing' => $faker->word,
        'name' => $faker->word,
        'arealookup' => $faker->word,
        'public' => rand(0,1),
        'deleted' => rand(0,1),
    ];
});
