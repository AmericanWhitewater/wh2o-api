<?php

namespace Database\Factories;

use App\Models\Contributor;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContributorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contributor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->randomNumber(),
            'edit' => $this->faker->text(255),
            'reported' => $this->faker->boolean,
            'reach_id' => \App\Models\Reach::factory(),
        ];
    }
}
