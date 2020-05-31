<?php

use Illuminate\Database\Migrations\Migration;

class IndexReachAccessLocations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE INDEX reaches_ploc_gist_idx ON reaches USING GIST(ploc)");
        DB::statement("CREATE INDEX reaches_tloc_gist_idx ON reaches USING GIST(tloc)");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
