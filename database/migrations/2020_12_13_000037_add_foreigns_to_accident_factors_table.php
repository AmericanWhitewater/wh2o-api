<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToAccidentFactorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('accident_factors', function (Blueprint $table) {
            $table
                ->foreign('factor_id')
                ->references('id')
                ->on('factors');
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
        Schema::table('accident_factors', function (Blueprint $table) {
            $table->dropForeign(['factor_id']);
            $table->dropForeign(['accident_id']);
        });
    }
}
