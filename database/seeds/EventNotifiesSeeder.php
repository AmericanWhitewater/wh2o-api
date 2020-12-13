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
        factory(App\EventNotify::class, 100)->create();
    }
}
