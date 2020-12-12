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
        factory(App\Cause::class, 10)->create();
    }
}
