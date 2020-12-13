<?php

namespace Database\Factories;

use App\Models\GageSource;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class GageSourceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GageSource::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'source' => $this->faker->text(8),
            'title' => $this->faker->word,
            'url' => $this->faker->url,
            'update_frequency' => $this->faker->randomNumber(0),
            'update_start_time' => $this->faker->time,
            'data' => $this->faker->word(512),
            'populated' => $this->faker->date,
            'disclaimer' => $this->faker->text,
        ];
    }
}
