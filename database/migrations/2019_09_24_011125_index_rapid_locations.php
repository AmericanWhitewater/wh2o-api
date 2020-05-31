<?php

use Illuminate\Database\Migrations\Migration;

class IndexRapidLocations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("CREATE INDEX rapids_rloc_gist_idx ON rapids USING GIST(rloc)");
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
