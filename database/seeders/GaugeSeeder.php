<?php

namespace Database\Seeders;

use App\Models\Gauge;
use Illuminate\Database\Seeder;

class GaugeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gauge::factory()
            ->count(5)
            ->create();
    }
}
