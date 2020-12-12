<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauges', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('source', 8)->nullable();
            $table->string('source_id', 25)->nullable();
            $table->string('name', 75)->nullable();
            $table->string('huc', 8)->nullable();
            $table->integer('update_frequency')->nullable();
            $table->string('county', 5)->nullable();
            $table->double('glat')->nullable();
            $table->double('glon')->nullable();
            $table->time('update_start_time')->nullable();
            $table->date('header_updated')->nullable();
            $table->string('timezone', 50);
            $table->geometry('loc')->nullable();
            $table->string('data')->nullable();
            $table->integer('update_calculated_frequency')->nullable();
            $table->date('clean_date')->nullable();
            $table->boolean('enabled')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gauges');
    }
}
