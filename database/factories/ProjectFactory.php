<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Project;
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

$factory->define(Project::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,5000),
        'name' => $faker->word,
        'description' => $faker->text,
        'uid' => rand(0,5000),
        'deleted' => rand(0,1),
        'shortname' => $faker->word
    ];
});
