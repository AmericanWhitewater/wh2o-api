<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToAccidentsInjuryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('accidents_injury', function (Blueprint $table) {
            $table
                ->foreign('injury_id')
                ->references('id')
                ->on('injuries');
            $table
                ->foreign('accident_id')
                ->references('id')
                ->on('accidents');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('accidents_injury', function (Blueprint $table) {
            $table->dropForeign(['injury_id']);
            $table->dropForeign(['accident_id']);
        });
    }
}
