<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\GaugePersonalSetting;

class GaugePersonalSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GaugePersonalSetting::factory()
            ->count(5)
            ->create();
    }
}
