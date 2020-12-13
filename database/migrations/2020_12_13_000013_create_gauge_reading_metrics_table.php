<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGaugeReadingMetricsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_reading_metrics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('shortkey', 5);
            $table->string('unit', 15);
            $table->string('name', 50);
            $table->string('format', 50);
            $table->smallInteger('sortorder');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gauge_reading_metrics');
    }
}
