<?php

namespace Database\Factories;

use App\Models\Reach;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReachFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Reach::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'river' => $this->faker->text(80),
            'section' => $this->faker->text(255),
            'altname' => $this->faker->text(80),
            'county' => $this->faker->text(80),
            'zipcode' => $this->faker->text(5),
            'length' => $this->faker->randomNumber(0),
            'avggradient' => $this->faker->randomNumber(0),
            'maxgradient' => $this->faker->randomNumber(0),
            'agency' => $this->faker->text(255),
            'gaugeinfo' => $this->faker->text,
            'description' => $this->faker->sentence(15),
            'photoid' => $this->faker->randomNumber(0),
            'permitid' => $this->faker->randomNumber(0),
            'huc' => $this->faker->text(8),
            'plat' => $this->faker->randomNumber(2),
            'plon' => $this->faker->randomNumber(2),
            'prrn' => $this->faker->text(20),
            'tlat' => $this->faker->randomNumber(2),
            'tlon' => $this->faker->randomNumber(2),
            'trrn' => $this->faker->text(20),
            'skid' => $this->faker->randomNumber(0),
            'status' => $this->faker->text(255),
            'edited' => $this->faker->date,
            'is_final' => $this->faker->boolean,
            'revision' => $this->faker->randomNumber(0),
            'class' => 'none',
            'was_final' => $this->faker->boolean,
            'thumboverride' => $this->faker->boolean,
            'shuttledetails' => $this->faker->text,
            'abstract' => $this->faker->text,
            'direction_default' => $this->faker->randomNumber(0),
            'custom_destination' => $this->faker->text(255),
            'revision_comment' => $this->faker->text(255),
            'permiturl' => $this->faker->text,
            'permitinfo' => $this->faker->text,
            'image_override' => $this->faker->text(255),
            'accident_id' => \App\Models\Accident::factory(),
        ];
    }
}
