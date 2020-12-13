<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Models\GaugeCorrelation;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeCorrelationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugeCorrelation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'sourceid' => $this->faker->randomNumber(0),
            'targetid' => $this->faker->randomNumber(0),
            'time_adjustments' => $this->faker->randomNumber(0),
            'comment' => $this->faker->word,
            'metricid' => $this->faker->numberBetween(0, 32767),
            'estimated' => $this->faker->boolean,
            'deleted' => $this->faker->boolean,
            'excluded' => $this->faker->boolean,
            'uid' => $this->faker->randomNumber(0),
        ];
    }
}
