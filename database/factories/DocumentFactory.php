<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Document;
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

$factory->define(Document::class, function (Faker $faker) {
    return [
        'shortname' => $faker->word,
        'abstract' => $faker->text,
        'description' => $faker->text,
        'keywords' => $faker->word,
        'recipient' => rand(1, 2000),
        'author' => rand(1, 2000),
        'document' => $faker->word,
        'title' => $faker->word,
        'document_size' => rand(1, 2000),
        'documentid' => $faker->unique()->numberBetween(1,2000)
    ];
});
