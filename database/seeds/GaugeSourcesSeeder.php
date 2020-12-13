<?php

use Illuminate\Database\Seeder;
use App\GaugeSource;
class GaugeSourcesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       factory(App\GaugeSource::class, 100)->create();
    }
}
