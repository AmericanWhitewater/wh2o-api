<?php

use Illuminate\Database\Migrations\Migration;

class IndexReachGeoms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE INDEX reaches_geom_gist_idx ON reaches USING GIST(geom)");
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
