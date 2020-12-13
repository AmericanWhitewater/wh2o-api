<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->bigIncrements('id');
            $table->integer('gauge_id');
            $table->smallInteger('metric');
            $table->date('lobs_time')->nullable();
            $table->bigInteger('lobs_id')->nullable();
            $table->integer('lobs_reading')->nullable();
            $table->date('obs_time')->nullable();
            $table->bigInteger('obs_id')->nullable();
            $table->integer('obs_reading')->nullable();
            $table->text('obs_data')->nullable();
            $table->integer('write_sequence')->nullable();
            $table->bigInteger('obs_ref')->nullable();
            $table->date('last_journal_date');
            $table->integer('gd_ref')->nullable();

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
        Schema::dropIfExists('gauge_updates');
    }
}
