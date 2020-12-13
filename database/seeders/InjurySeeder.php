<?php

namespace Database\Seeders;

use App\Models\Injury;
use Illuminate\Database\Seeder;

class InjurySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Injury::factory()
            ->count(5)
            ->create();
    }
}
