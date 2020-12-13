<?php

use Illuminate\Database\Seeder;
use App\EventDate;
class EventDatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\EventDate::class, 100)->create();
    }
}
