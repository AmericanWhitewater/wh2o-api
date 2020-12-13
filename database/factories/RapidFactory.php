<?php

namespace Database\Factories;

use App\Models\Rapid;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class RapidFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Rapid::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'approximate' => $this->faker->boolean,
            'rlat' => $this->faker->randomNumber(2),
            'rlon' => $this->faker->randomNumber(2),
            'distance' => $this->faker->randomNumber(0),
            'photoid' => $this->faker->randomNumber(0),
            'revision' => $this->faker->randomNumber(0),
            'videoid' => $this->faker->randomNumber(0),
            'isaccess' => $this->faker->numberBetween(0, 32767),
            'ishazard' => $this->faker->numberBetween(0, 32767),
            'isplayspot' => $this->faker->numberBetween(0, 32767),
            'isportage' => $this->faker->numberBetween(0, 32767),
            'isputin' => $this->faker->numberBetween(0, 32767),
            'istakeout' => $this->faker->numberBetween(0, 32767),
            'iswaterfall' => $this->faker->numberBetween(0, 32767),
            'isother' => $this->faker->numberBetween(0, 32767),
            'israpid' => $this->faker->numberBetween(0, 32767),
            'difficulty' => null,
            'name' => $this->faker->name,
            'description' => $this->faker->text,
            'reach_id' => \App\Models\Reach::factory(),
        ];
    }
}
