<?php

namespace Database\Seeders;

use App\Models\Permit;
use Illuminate\Database\Seeder;

class PermitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permit::factory()
            ->count(5)
            ->create();
    }
}
