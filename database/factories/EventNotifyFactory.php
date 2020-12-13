<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\EventNotify;
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

$factory->define(EventNotify::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,1000),
        'uid' => rand(1,100),
        'eventid' => rand(1,100),
    ];
});
