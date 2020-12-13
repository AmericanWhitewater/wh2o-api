<?php

namespace Database\Factories;

use App\Models\EventNotify;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventNotifyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EventNotify::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->randomNumber(0),
            'eventid' => $this->faker->randomNumber(0),
        ];
    }
}
