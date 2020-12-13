<?php

namespace Database\Factories;

use App\Models\EventDate;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventDateFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EventDate::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'evdate' => $this->faker->date,
            'detail_description' => $this->faker->text,
            'batchid' => $this->faker->randomNumber(0),
            'starttime' => $this->faker->time,
            'endtime' => $this->faker->time,
            'tz' => 'mst',
            'mincfs' => $this->faker->randomNumber(0),
            'maxcfs' => $this->faker->randomNumber(0),
            'event_id' => \App\Models\Event::factory(),
        ];
    }
}
