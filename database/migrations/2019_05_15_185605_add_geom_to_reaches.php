<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGeomToReaches extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reaches', function (Blueprint $table) {
            $table->geometry('geom', 'GEOMETRY', 4326)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reaches', function (Blueprint $table) {
            $table->dropColumn('geom');
        });
    }
}
