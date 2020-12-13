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
        factory(App\Rapid::class, 100)->create();
    }
}
