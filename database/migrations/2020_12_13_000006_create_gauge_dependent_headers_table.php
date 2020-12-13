<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGaugeDependentHeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_dependent_headers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('sourceid');
            $table->integer('targetid');
            $table->integer('time_adjustments')->nullable();
            $table->string('comment', 160)->nullable();
            $table->smallInteger('metricid')->default(0);
            $table->boolean('estimated')->default(false);
            $table->boolean('deleted')->default(false);
            $table->boolean('excluded')->default(false);
            $table->integer('uid')->default(0);

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
        Schema::dropIfExists('gauge_dependent_headers');
    }
}
