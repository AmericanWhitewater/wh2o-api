<?php

use Illuminate\Database\Seeder;
use App\Listing;

class ListingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Listing::class, 100)->create();
    }
}
