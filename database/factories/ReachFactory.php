<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Reach;
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

$factory->define(Reach::class, function (Faker $faker) {


    $classes = ['none', 'I', 'I(II)', 'I(III)', 'I(IV)', 'I(V)', 'I(V+)', 'I-II', 'I-II(III)', 'I-II(IV)', 'I-II(V)', 'I-II(V+)', 'II', 'II(III)', 'II(IV)', 'II(V)', 'II(V+)', 'I-II+(III)', 'I-II+(IV)', 'I-II+(V)', 'I-II+(V+)', 'II+', 'II+(III)', 'II+(IV)', 'II+(V)', 'II+(V+)', 'I-III', 'I-III(IV)', 'I-III(V)', 'I-III(V+)', 'II-III', 'II-III(IV)', 'II-III(V)', 'II-III(V+)', 'III', 'I-III+', 'I-III+(IV)', 'I-III+(V)', 'I-III+(V+)', 'II-III+', 'II-III+(IV)', 'II-III+(V)', 'II-III+(V+)', 'III+', 'III+(IV)', 'III+(V)', 'III+(V+)', 'I-IV', 'I-IV(V)', 'I-IV(V+)', 'II-IV', 'II-IV(V)', 'II-IV(V+)', 'III-IV', 'III-IV(V)', 'III-IV(V+)', 'IV', 'IV(V)', 'IV(V+)', 'I-IV+', 'I-IV+(V)', 'I-IV+(V+)', 'II-IV+', 'II-IV+(V)', 'II-IV+(V+)', 'III-IV+', 'III-IV+(V)', 'III-IV+(V+)', 'IV+', 'I-V', 'I-V(V+)', 'II-V', 'II-V(V+)', 'III-V', 'III-V(V+)', 'IV-V', 'IV-V(V+)', 'V', 'II-V+', 'III-V+', 'IV-V+', 'V+'];

    return [
        'id' => $faker->unique()->numberBetween(1,10000),
        'river' => $faker->word,
        'section' => $faker->word,
        'altname' =>$faker->word,
        'county' => null,
        'zipcode' => null,
        'length' => null,
        'avggradient' => null,
        'maxgradient' => null,
        'agency' => null,
        'gaugeinfo' => null,
        'description' => $faker->text,
        'abstract' => $faker->text,
        'photoid' => null,
        'permitid' => null,
        'huc' => null,
        'plat' => null,
        'plon' => null,
        'ploc' => null,
        'prrn' => null,
        'tlat' => null,
        'tlon' => null,
        'tloc' => null,
        'trrn' => null,
        'skid' => null,
        'status' => 'u',
        'edited' => null,
        'is_final' => true,
        'was_final' => false,
        'thumboverride' => null,
        'shuttledetails' => null,
        'revision' => 0,
        'class' => $classes[rand(0,8)],
        'direction_default' => null,
        'custom_destination' => null,
        'revision_comment' => null,
        'permiturl' => null,
        'permitinfo' => null,
        'image_override' => null
    ];
});
