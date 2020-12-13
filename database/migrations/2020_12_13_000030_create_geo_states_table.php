<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGeoStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geo_states', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('record_number');
            $table->char('name', 100);
            $table->char('abbreviation', 2);
            $table->string('country');
            $table->char('gmi_admin', 7)->nullable();
            $table->char('fips')->nullable();
            $table->unsignedBigInteger('reach_id');

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
        Schema::dropIfExists('geo_states');
    }
}
