<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Models\GaugeCorrelationRange;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugeCorrelationRangeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugeCorrelationRange::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ghid' => \App\Models\GaugeCorrelation::factory(),
        ];
    }
}
