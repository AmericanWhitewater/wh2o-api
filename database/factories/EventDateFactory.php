<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\EventDate;
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

$factory->define(EventDate::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,2000),
        'event_id' => rand(1,100),
        'evdate' => $faker->date,
        'detail_description' => $faker->text,
        'batchid' => rand(1,100),
        'starttime' => $faker->time,
        'endtime' => $faker->time,
        'tz' => 'mst',
        'mincfs' => rand(100, 1000),
        'maxcfs' => rand(1001, 5000)
    ];
});
