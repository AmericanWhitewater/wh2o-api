<?php

use Illuminate\Database\Seeder;
use App\Journal;

class JournalsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         factory(App\Journal::class, 100)->create();
    }
}
