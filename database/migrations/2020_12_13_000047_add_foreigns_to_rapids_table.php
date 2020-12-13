<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToRapidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rapids', function (Blueprint $table) {
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
        Schema::table('rapids', function (Blueprint $table) {
            $table->dropForeign(['reach_id']);
        });
    }
}
