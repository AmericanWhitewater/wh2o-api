<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Journal;
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

$factory->define(Journal::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->numberBetween(1,2000),
        'artid' => $faker->unique()->numberBetween(1,2000),
        'arttitle' => $faker->word,
        'artdate' => $faker->date,
        'startpage' => rand(0,5),
        'endpage' => rand(0,5),
        'volume' => rand(0,5),
        'issuenumber' => 0,
        'issueyear' => $faker->year,
        'scanner_uid' => rand(0,2000),
        'pdfsize' => null,
        'forpublic' => rand(0,1),
    ];
});
