<?php

namespace Database\Factories;

use App\Models\Gauge;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Gauge::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'source_id' => $this->faker->state,
            'source' => $this->faker->text(8),
            'name' => $this->faker->name,
            'huc' => $this->faker->text(8),
            'update_frequency' => $this->faker->randomNumber(0),
            'county' => $this->faker->text(5),
            'glat' => $this->faker->randomNumber(2),
            'glon' => $this->faker->randomNumber(2),
            'update_start_time' => $this->faker->time,
            'header_updated' => $this->faker->date,
            'timezone' => $this->faker->text(50),
            'data' => $this->faker->text(255),
            'update_calculated_frequency' => $this->faker->randomNumber(0),
            'clean_date' => $this->faker->date,
            'enabled' => $this->faker->boolean,
            'id' => \App\Models\GaugeCorrelation::factory(),
        ];
    }
}
