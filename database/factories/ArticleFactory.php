<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'author' => $this->faker->text(50),
            'abstract' => $this->faker->text,
            'abstract_photo' => $this->faker->text(24),
            'icon' => $this->faker->text(50),
            'has_contents' => $this->faker->numberBetween(0, 32767),
            'contents' => $this->faker->text,
            'contents_photo' => $this->faker->text(24),
            'contact' => $this->faker->text(50),
            'posted' => $this->faker->date,
            'short_name' => $this->faker->text(65),
            'uid' => $this->faker->randomNumber(),
            'release_date' => $this->faker->date,
            'deleted' => $this->faker->numberBetween(0, 32767),
            'news_article_id' => \App\Models\News::factory(),
        ];
    }
}
