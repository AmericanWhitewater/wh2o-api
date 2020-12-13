<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToReachesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('reaches', function (Blueprint $table) {
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
        Schema::table('reaches', function (Blueprint $table) {
            $table->dropForeign(['accident_id']);
        });
    }
}
