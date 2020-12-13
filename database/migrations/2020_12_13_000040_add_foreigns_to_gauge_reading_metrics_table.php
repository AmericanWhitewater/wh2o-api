<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToGaugeReadingMetricsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('gauge_reading_metrics', function (Blueprint $table) {
            $table
                ->foreign('id')
                ->references('id')
                ->on('gauge_dependent_headers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gauge_reading_metrics', function (Blueprint $table) {
            $table->dropForeign(['id']);
        });
    }
}
