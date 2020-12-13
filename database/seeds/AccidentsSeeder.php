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
        factory(App\Accident::class, 100)->create();
    }
}
