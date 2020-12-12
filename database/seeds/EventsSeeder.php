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
        for($i = 0; $i < 100; ++$i) {
            factory(App\Event::class)->create();
        }
    }
}
