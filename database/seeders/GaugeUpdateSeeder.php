<?php

namespace Database\Seeders;

use App\Models\GaugeUpdate;
use Illuminate\Database\Seeder;

class GaugeUpdateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugeUpdate::factory()
            ->count(5)
            ->create();
    }
}
