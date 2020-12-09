<?php

use Illuminate\Database\Seeder;
use App\Accident;

class AccidentsSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function runFake()
    {
        for($i = 0; $i < 100; ++$i) {
            factory(App\Accident::class)->create();
        }
    }
}
