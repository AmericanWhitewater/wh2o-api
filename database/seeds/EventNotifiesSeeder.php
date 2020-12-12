<?php

use Illuminate\Database\Seeder;
use App\EventNotify;
class EventNotifiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 100; ++$i) {
            factory(App\EventNotify::class)->create();
        }
    }
}
