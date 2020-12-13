<?php

namespace Database\Seeders;

use App\Models\Rapid;
use Illuminate\Database\Seeder;

class RapidSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rapid::factory()
            ->count(5)
            ->create();
    }
}
