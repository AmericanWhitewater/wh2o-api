<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Comment;
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

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'uid' => rand(0,1000),
        'sectionid' => rand(0,1000),
        'name' => $faker->word,
        'comments' => $faker->text,
        'revision' => rand(1,100),
        'is_final' => 1,
        'is_private' => 0,
        'id' => $faker->unique()->numberBetween(1,2000)
    ];
});
