<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Event;
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

$factory->define(Event::class, function (Faker $faker) {
    return [
        'description' => $faker->text,
        'city' => $faker->word,
        'title' => $faker->word,
        'id' => $faker->unique()->numberBetween(1,2000)
    ];
});
