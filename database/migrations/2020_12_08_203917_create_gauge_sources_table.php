<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugeSourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_sources', function (Blueprint $table) {
            $table->id();
            $table->string('source', 8);
            $table->string('title', 75)->nullable();
            $table->string('url', 200)->nullable();
            $table->char('update_type', 1)->default('h');
            // m - manual (no programmatic updates) h - header based (uses the last_update and update frequency to serve a list of headers needing readings ) r - reading based (uses incoming readings to populate the header table later ).'
            $table->integer('update_frequency')->default(0)->nullable();
            // on reading-based updates (r) this is the interval to update on in seconds, on header-based gauges (h) this is the interval to update gauge headers on in seconds.'
            $table->time('update_start_time')->default(now());
            // when to start requesting updates on a reading-based gauge. For header based gauges, this is the time to do the update.
            $table->char('data', 512)->nullable();
            $table->date('populated')->nullable()->default(now());
            $table->text('disclaimer')->nullable();
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
        Schema::dropIfExists('gauge_sources');
    }
}
