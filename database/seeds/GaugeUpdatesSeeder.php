<?php

use Illuminate\Database\Seeder;
use App\GaugeUpdates;
class GaugeUpdatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 10000; ++$i) {
            factory(App\GaugeUpdates::class)->create();
        }
    }
}
