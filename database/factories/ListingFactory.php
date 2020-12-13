<?php

namespace Database\Factories;

use App\Models\Listing;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ListingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Listing::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'listing' => $this->faker->text(25),
            'name' => $this->faker->name,
            'arealookup' => $this->faker->text(25),
            'public' => $this->faker->numberBetween(0, 32767),
        ];
    }
}
