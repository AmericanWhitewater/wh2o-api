<?php

use Illuminate\Database\Seeder;
use App\Reach;
class ReachesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Reach::class, 100)->create();
    }
}
