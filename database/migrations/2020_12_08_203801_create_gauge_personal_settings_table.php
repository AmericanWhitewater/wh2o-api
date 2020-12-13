<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugePersonalSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_personal_settings', function (Blueprint $table) {
            $table->id();
            $table->integer('uid');
            $table->time('starttime')->nullable();
            $table->time('endtime')->nullable();
            $table->string('tz', 60)->nullable();
            $table->string('email', 100)->nullable();
            $table->smallInteger('format')->nullable();
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
        Schema::dropIfExists('gauge_personal_settings');
    }
}
