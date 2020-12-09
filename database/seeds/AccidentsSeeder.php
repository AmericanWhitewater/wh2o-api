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
        $accidents = Accident::all();

        for($i = 0; $i < 1000; ++$i) {
            factory(App\Accident::class)->create();
        }

    }
}
