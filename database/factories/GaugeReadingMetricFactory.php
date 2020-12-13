<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Models\GaugeReadingMetric;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeReadingMetricFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugeReadingMetric::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'shortkey' => $this->faker->text(5),
            'unit' => $this->faker->text(15),
            'name' => $this->faker->name,
            'format' => $this->faker->text(50),
            'sortorder' => $this->faker->numberBetween(0, 32767),
            'id' => \App\Models\GaugeCorrelation::factory(),
        ];
    }
}
