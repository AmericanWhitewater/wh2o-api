<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GaugeCorrelation;

class GaugeCorrelationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugeCorrelation::factory()
            ->count(5)
            ->create();
    }
}
