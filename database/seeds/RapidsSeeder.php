<?php

use Illuminate\Database\Seeder;
use App\Rapid;
class RapidsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 1500; ++$i) {
            factory(App\Rapid::class)->create();
        }
    }
}
