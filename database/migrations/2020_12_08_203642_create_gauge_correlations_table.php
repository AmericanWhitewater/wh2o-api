<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugeCorrelationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // gauge_dependent_headers

        Schema::create('gauge_correlations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('sourceid');
            $table->integer('targetid');
            $table->integer('time_adjustments')->nullable();
            $table->string('comment', 160)->nullable();
            $table->smallInteger('metricid')->default(0);
            $table->boolean('estimated')->default(false);
            $table->boolean('deleted')->default(false);
            $table->boolean('excluded')->default(false);
            $table->integer('uid')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gauge_correlations');
    }
}
