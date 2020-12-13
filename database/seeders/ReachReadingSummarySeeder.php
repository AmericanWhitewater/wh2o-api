<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ReachReadingSummary;

class ReachReadingSummarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ReachReadingSummary::factory()
            ->count(5)
            ->create();
    }
}
