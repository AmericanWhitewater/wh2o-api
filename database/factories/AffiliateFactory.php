<?php

namespace Database\Factories;

use App\Models\Affiliate;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class AffiliateFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Affiliate::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'last' => $this->faker->text(50),
            'url' => $this->faker->url,
            'con_email' => $this->faker->text(120),
            'members' => $this->faker->randomNumber(),
            'contact' => $this->faker->text,
            'abstract' => $this->faker->text,
            'description' => $this->faker->sentence(15),
            'reaches' => $this->faker->text,
            'volunteer' => $this->faker->randomNumber(),
            'city' => $this->faker->city,
            'state' => $this->faker->countryCode(),
            'expiration' => 'EXPIRATION',
            'member_id' => $this->faker->randomNumber(),
            'deleted' => $this->faker->numberBetween(0, 32767),
        ];
    }
}
