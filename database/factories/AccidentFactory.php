<?php

namespace Database\Factories;

use App\Models\Accident;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class AccidentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Accident::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'accident_id' => $this->faker->uuid,
            'accident_date' => $this->faker->dateTime,
            'victim_name' => $this->faker->text(255),
            'reach_id' => $this->faker->numberBetween(0, 32767),
            'country_abbr' => null,
            'state' => $this->faker->countryCode(),
            'river' => $this->faker->text(255),
            'section' => $this->faker->text(255),
            'location' => $this->faker->text(255),
            'water_level' => $this->faker->text(40),
            'rel_level' => $this->faker->text(255),
            'difficulty' => $this->faker->text(255),
            'age' => $this->faker->numberBetween(0, 32767),
        ];
    }
}
