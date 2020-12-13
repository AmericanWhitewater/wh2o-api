<?php

namespace Database\Seeders;

use App\Models\EventNotify;
use Illuminate\Database\Seeder;

class EventNotifySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EventNotify::factory()
            ->count(5)
            ->create();
    }
}
