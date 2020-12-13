<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GaugeReadingMetric;

class GaugeReadingMetricSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugeReadingMetric::factory()
            ->count(5)
            ->create();
    }
}
