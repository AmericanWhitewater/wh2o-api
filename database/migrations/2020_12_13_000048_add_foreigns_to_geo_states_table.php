<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToGeoStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('geo_states', function (Blueprint $table) {
            $table
                ->foreign('reach_id')
                ->references('id')
                ->on('reaches');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('geo_states', function (Blueprint $table) {
            $table->dropForeign(['reach_id']);
        });
    }
}
