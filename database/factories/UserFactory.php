<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\User;
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

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'address' => $faker->streetAddress(),
        'city' => $faker->city(),
        'state' => $faker->countryCode(),
        'country' => $faker->countryCode(),
        'lastlogin' => $faker->date,
        'volunteer' => rand(0,1),
        'alerts' => rand(0,1),
        'postal' => rand(0,1),
        'memnum' => $faker->unique()->numberBetween(1, 200000),
        'address2' => $faker->buildingNumber(),
        'home_phone' => $faker->phoneNumber(),
        'work_phone' => $faker->phoneNumber(),
        'journal' => rand(0,1),
        'aw_beta' => rand(0,1),
        'name' => $faker->firstName(),
    ];
});
