<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Models\GaugePersonalSetting;
use Illuminate\Database\Eloquent\Factories\Factory;

class GaugePersonalSettingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GaugePersonalSetting::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'uid' => $this->faker->randomNumber(0),
            'starttime' => $this->faker->time,
            'endtime' => $this->faker->time,
            'tz' => $this->faker->text(60),
            'email' => $this->faker->email,
            'format' => $this->faker->numberBetween(0, 32767),
        ];
    }
}
