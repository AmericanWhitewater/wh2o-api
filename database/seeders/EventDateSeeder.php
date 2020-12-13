<?php

namespace Database\Seeders;

use App\Models\EventDate;
use Illuminate\Database\Seeder;

class EventDateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventDate::factory()
            ->count(5)
            ->create();
    }
}
