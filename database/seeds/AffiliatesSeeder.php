<?php

use Illuminate\Database\Seeder;
use App\Affiliate;
class AffiliatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Affiliate::class, 100)->create();
    }
}
