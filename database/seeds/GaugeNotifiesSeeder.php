<?php

use Illuminate\Database\Seeder;
use App\GaugeNotify;
class GaugeNotifiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\GaugeNotify::class, 100)->create();
    }
}
