<?php

namespace Database\Seeders;

use App\Models\Accident;
use Illuminate\Database\Seeder;

class AccidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Accident::factory()
            ->count(5)
            ->create();
    }
}
