<?php

namespace Database\Factories;

use App\Models\Contact;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Contact::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->randomNumber(0),
            'name' => $this->faker->name,
            'city' => $this->faker->city,
            'address' => $this->faker->text,
            'state' => $this->faker->countryCode(),
            'zip' => $this->faker->text(10),
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
            'fax' => $this->faker->text(25),
            'contactid' => $this->faker->randomNumber(0),
            'bio' => $this->faker->sentence(15),
            'lname' => $this->faker->text(255),
            'fname' => $this->faker->text(25),
            'photo' => '//picsum.photos/200/300',
            'company' => $this->faker->text(45),
            'position' => $this->faker->text(45),
            'territory' => $this->faker->text(45),
            'country_code' => $this->faker->countryCode(),
        ];
    }
}
