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
        factory(App\GaugeUpdates::class, 100)->create();
    }
}
