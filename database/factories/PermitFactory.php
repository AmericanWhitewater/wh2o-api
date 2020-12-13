<?php

namespace Database\Factories;

use App\Models\Permit;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class PermitFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Permit::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'agency' => $this->faker->text(255),
            'url' => $this->faker->url,
            'start_date' => $this->faker->date,
            'end_date' => $this->faker->date,
            'reach_id' => \App\Models\Reach::factory(),
        ];
    }
}
