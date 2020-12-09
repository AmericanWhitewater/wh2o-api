<?php

use Illuminate\Database\Seeder;
use App\Cause;
class CausesSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function runFake()
    {
        for($i = 0; $i < 10; ++$i) {
            factory(App\Cause::class)->create();
        }
    }
}
