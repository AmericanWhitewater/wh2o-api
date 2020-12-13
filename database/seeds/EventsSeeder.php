<?php

use Illuminate\Database\Seeder;
use App\Event;
class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Event::class, 100)->create();
    }
}
