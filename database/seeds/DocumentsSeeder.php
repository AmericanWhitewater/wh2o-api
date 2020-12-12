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
        factory(App\Document::class, 100)->create();
    }
}
