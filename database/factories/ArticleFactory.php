<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Article;
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

$factory->define(Article::class, function (Faker $faker) {
    return [
        'uid' => rand(1, 2000),
        'title' => $faker->title,
        'short_name' => $faker->name,
        'contents' => $faker->text,
        'id' => $faker->unique()->numberBetween(1,2000)
    ];
});
