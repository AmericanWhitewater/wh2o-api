<?php

namespace Database\Seeders;

use App\Models\Reach;
use Illuminate\Database\Seeder;

class ReachSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Reach::factory()
            ->count(5)
            ->create();
    }
}
