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
        factory(App\Gauge::class, 100)->create();
    }
}
