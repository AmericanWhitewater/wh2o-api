<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'city' => $this->faker->city,
            'description' => $this->faker->sentence(15),
            'cat' => $this->faker->randomNumber(0),
            'uid' => $this->faker->randomNumber(0),
            'state' => $this->faker->countryCode(),
            'url' => $this->faker->url,
            'orgname' => $this->faker->text(50),
            'orgaddress' => $this->faker->text(255),
            'orgphone' => $this->faker->text(14),
            'orgfax' => $this->faker->text(14),
            'orgemail' => $this->faker->text(255),
            'site' => $this->faker->text(255),
            'rivid' => $this->faker->randomNumber(0),
            'expectpart' => $this->faker->randomNumber(0),
            'expectspec' => $this->faker->randomNumber(0),
            'issue' => $this->faker->text,
            'media' => $this->faker->text,
            'nowreventinfo' => $this->faker->numberBetween(0, 32767),
            'contact_id' => $this->faker->randomNumber(0),
            'html_description' => $this->faker->text,
            'retired' => $this->faker->numberBetween(0, 32767),
            'event_id' => \App\Models\EventNotify::factory(),
        ];
    }
}
