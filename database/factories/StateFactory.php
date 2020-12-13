<?php

namespace Database\Factories;

use App\Models\State;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class StateFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = State::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'record_number' => $this->faker->randomNumber(0),
            'name' => $this->faker->word(100),
            'abbreviation' => $this->faker->unique()->countryCode(),
            'country' => $this->faker->country,
            'gmi_admin' => null,
            'fips' => $this->faker->word(255),
            'reach_id' => \App\Models\Reach::factory(),
        ];
    }
}
