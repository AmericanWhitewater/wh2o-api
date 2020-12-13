<?php

namespace Database\Factories;

use App\Models\Journal;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class JournalFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Journal::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'arttitle' => $this->faker->text,
            'artdate' => $this->faker->text,
            'startpage' => $this->faker->randomNumber(),
            'endpage' => $this->faker->randomNumber(),
            'volume' => $this->faker->randomNumber(),
            'issuenumber' => $this->faker->randomNumber(),
            'issueyear' => $this->faker->randomNumber(),
            'scanner_uid' => $this->faker->randomNumber(),
            'pdfsize' => $this->faker->text,
            'forpublic' => $this->faker->numberBetween(0, 32767),
        ];
    }
}
