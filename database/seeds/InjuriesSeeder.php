<?php

use Illuminate\Database\Seeder;
use App\Injury;
class InjuriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $injuries = array('Does not Apply', 'Asthma Attack', 'Head Injury / Concussion', 'Heart Attack / Heart Failure', 'Hypothermia', 'Near Drowning', 'Other', 'Shoulder Dislocation','Spinal Injury','Physical Trauma');

        foreach ($injuries as $injury) {
             factory(App\Injury::class)->create([
                'injury' => $injury,
            ]);
        }
    }
}
