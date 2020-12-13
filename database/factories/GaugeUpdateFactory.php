<?php

namespace Database\Factories;

use App\Models\GaugeUpdate;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeUpdateFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugeUpdate::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'gauge_id' => $this->faker->randomNumber(0),
            'metric' => $this->faker->numberBetween(0, 32767),
            'lobs_time' => $this->faker->date,
            'lobs_id' => $this->faker->randomNumber(0),
            'lobs_reading' => $this->faker->randomNumber(0),
            'obs_time' => $this->faker->date,
            'obs_id' => $this->faker->randomNumber(0),
            'obs_reading' => $this->faker->randomNumber(0),
            'obs_data' => $this->faker->text,
            'write_sequence' => $this->faker->randomNumber(0),
            'obs_ref' => $this->faker->randomNumber(0),
            'last_journal_date' => $this->faker->date,
            'gd_ref' => $this->faker->randomNumber(0),
        ];
    }
}
