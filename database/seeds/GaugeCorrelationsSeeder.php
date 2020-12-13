<?php

use Illuminate\Database\Seeder;
use App\GaugeCorrelation;
class GaugeCorrelationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\GaugeCorrelation::class, 100)->create();
    }
}
