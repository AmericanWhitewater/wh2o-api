<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email_verified_at' => now(),
            'password' => \Hash::make('password'),
            'remember_token' => Str::random(10),
            'uname' => $this->faker->name,
            'upass' => $this->faker->text(255),
            'email' => $this->faker->unique()->email,
            'google_id' => $this->faker->text(255),
            'facebook_id' => $this->faker->text(255),
            'epassword' => $this->faker->text(255),
            'zip' => $this->faker->text(255),
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'state' => $this->faker->countryCode(),
            'country' => $this->faker->country,
            'lastlogin' => $this->faker->date,
            'volunteer' => $this->faker->randomNumber(0),
            'alerts' => $this->faker->randomNumber(0),
            'postal' => $this->faker->randomNumber(0),
            'memnum' => $this->faker->randomNumber(),
            'address2' => $this->faker->text(255),
            'home_phone' => $this->faker->text(255),
            'work_phone' => $this->faker->text(255),
            'journal' => $this->faker->randomNumber(0),
            'aw_beta' => $this->faker->randomNumber(0),
            'mbr_level' => $this->faker->text(255),
            'bad_addr' => $this->faker->randomNumber(0),
            'bad_email' => $this->faker->randomNumber(0),
            'mod_date' => $this->faker->date,
            'record_type' => $this->faker->text(255),
            'name' => $this->faker->name,
            'mem_transaction' => $this->faker->text(255),
            'transaction_id' => $this->faker->text(255),
            'expiration' => $this->faker->date,
            'modifydate' => $this->faker->date,
            'pushdate' => $this->faker->date,
            'mbr_relation' => $this->faker->text(255),
            'prefs' => $this->faker->text,
            'annual_renew' => $this->faker->randomNumber(0),
            'code' => $this->faker->randomNumber(0),
            'social_profile' => $this->faker->text(255),
            'uid' => \App\Models\Comment::factory(),
            'uid' => \App\Models\Document::factory(),
            'uid' => \App\Models\EventNotify::factory(),
        ];
    }
}
