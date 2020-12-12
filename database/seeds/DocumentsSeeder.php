<?php

use Illuminate\Database\Seeder;
use App\Document;
class DocumentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 100; ++$i) {
            factory(App\Document::class)->create();
        }
    }
}
