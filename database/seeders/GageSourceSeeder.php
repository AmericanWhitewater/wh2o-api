<?php

namespace Database\Seeders;

use App\Models\GageSource;
use Illuminate\Database\Seeder;

class GageSourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GageSource::factory()
            ->count(5)
            ->create();
    }
}
