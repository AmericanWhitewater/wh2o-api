<?php

use Illuminate\Database\Seeder;
use App\Gauge;
class GaugesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 1000; ++$i) {
            factory(App\Gauge::class)->create();
        }
    }
}
