<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugeUpdatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_updates', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('gauge_id');
            $table->smallInteger('metric');
            $table->date('lobs_time')->nullable();
            $table->bigInteger('lobs_id')->nullable();
            $table->integer('lobs_reading')->nullable(); // last reading
            $table->date('obs_time')->nullable();
            $table->bigInteger('obs_id')->nullable();
            $table->integer('obs_reading')->nullable(); // main reading
            $table->text('obs_data')->nullable(); // if we have an observation comment
            $table->integer('write_sequence')->nullable();
            $table->bigInteger('obs_ref')->nullable();
            $table->date('last_journal_date'); // last time a journal was written on the gauge.
            $table->integer('gd_ref')->nullable(); // gauge dependent reference
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gauge_updates');
    }
}
