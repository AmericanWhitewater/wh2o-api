<?php

use Illuminate\Database\Seeder;
use App\GaugePersonalSettings;
class GaugePersonalSettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\GaugePersonalSettings::class, 100)->create();
    }
}
