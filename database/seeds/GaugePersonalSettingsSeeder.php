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
        for($i = 0; $i < 100; ++$i) {
            factory(App\GaugePersonalSettings::class)->create();
        }
    }
}
