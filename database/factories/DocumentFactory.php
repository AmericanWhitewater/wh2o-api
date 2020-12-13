<?php

namespace Database\Factories;

use App\Models\Document;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class DocumentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Document::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'abstract' => $this->faker->text,
            'description' => $this->faker->text(255),
            'keywords' => $this->faker->text(255),
            'editdate' => $this->faker->date,
            'deleted' => $this->faker->numberBetween(0, 32767),
            'title' => $this->faker->word,
            'shortname' => $this->faker->text(45),
            'uid' => $this->faker->randomNumber(),
            'recipient' => $this->faker->randomNumber(),
            'author' => $this->faker->randomNumber(),
            'document' => 'document',
            'document_size' => $this->faker->randomNumber(),
        ];
    }
}
