<?php

namespace Database\Factories;

use App\Models\Comment;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'revision' => $this->faker->randomNumber(),
            'uid' => $this->faker->randomNumber(),
            'sectionid' => $this->faker->randomNumber(),
            'name' => $this->faker->text,
            'comments' => $this->faker->text,
            'posted' => $this->faker->date,
            'section' => $this->faker->text(25),
            'deleted' => $this->faker->date,
            'duid' => $this->faker->randomNumber(),
            'is_final' => $this->faker->boolean,
            'is_private' => $this->faker->boolean,
        ];
    }
}
