<?php

namespace Database\Factories;

use App\Models\GaugeNotify;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeNotifyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugeNotify::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->randomNumber(0),
            'min' => $this->faker->randomNumber(0),
            'metric' => $this->faker->numberBetween(0, 32767),
            'show' => $this->faker->boolean,
            'gauge_id' => $this->faker->randomNumber(0),
            'asap' => $this->faker->boolean,
            'down' => $this->faker->boolean,
        ];
    }
}
