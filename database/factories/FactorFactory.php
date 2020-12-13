<?php

namespace Database\Factories;

use App\Models\Factor;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class FactorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Factor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'factor' => $this->faker->text(50),
        ];
    }
}
