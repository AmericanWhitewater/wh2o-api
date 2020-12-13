<?php

namespace Database\Seeders;

use App\Models\GaugeNotify;
use Illuminate\Database\Seeder;

class GaugeNotifySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugeNotify::factory()
            ->count(5)
            ->create();
    }
}
