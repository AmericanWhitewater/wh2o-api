<?php

use Illuminate\Database\Seeder;
use App\Factor;
class FactorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $factors = array('Cold Water', 'Darkness', 'Extreme Weather', 'Failed Rescue', 'Inadequate Equipment', 'Inexperience', 'Other', 'Poor Group / Scene Management','Poor Planning','Solo Paddling','High Water','One Boat Trip');

        foreach ($factors as $factor) {
             factory(App\Factor::class)->create([
                'factor' => $factor,
            ]);
        }

    }
}
