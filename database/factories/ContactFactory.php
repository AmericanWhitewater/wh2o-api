<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Contact;
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

$factory->define(Contact::class, function (Faker $faker) {
    return [
        'contactid' => $faker->unique()->numberBetween(1,2000),
        'bio' => $faker->text,
        'photo' => '//picsum.photos/200/300',
        'id' => $faker->unique()->numberBetween(1,2000)
    ];
});
