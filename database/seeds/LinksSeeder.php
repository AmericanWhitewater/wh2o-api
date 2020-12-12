<?php

use Illuminate\Database\Seeder;
use App\Link;
class LinksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Link::class, 100)->create();
    }
}
