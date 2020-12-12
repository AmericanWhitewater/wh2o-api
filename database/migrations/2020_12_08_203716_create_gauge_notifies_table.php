<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGaugeNotifiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gauge_notifies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('uid')->nullable();
            $table->integer('min')->nullable();
            $table->smallInteger('metric')->nullable();
            $table->boolean('show')->nullable();
            $table->integer('gauge_id')->nullable();
            $table->boolean('asap')->nullable();
            $table->boolean('down')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gauge_notifies');
    }
}
