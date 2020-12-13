<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GaugeCorrelationRange;

class GaugeCorrelationRangeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugeCorrelationRange::factory()
            ->count(5)
            ->create();
    }
}
