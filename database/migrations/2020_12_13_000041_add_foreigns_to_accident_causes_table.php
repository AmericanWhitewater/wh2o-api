<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToAccidentCausesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('accident_causes', function (Blueprint $table) {
            $table
                ->foreign('cause_id')
                ->references('id')
                ->on('causes');
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
        Schema::table('accident_causes', function (Blueprint $table) {
            $table->dropForeign(['cause_id']);
            $table->dropForeign(['accident_id']);
        });
    }
}
