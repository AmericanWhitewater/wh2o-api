<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accidents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('accident_id');
            $table->timestamp('accident_date')->nullable();
            $table->string('victim_name', 255)->nullable();
            $table->smallInteger('reach_id')->nullable();
            $table->char('country_abbr', 2)->nullable();
            $table->string('state', 2)->nullable();
            $table->string('river', 255)->nullable();
            $table->string('section', 255)->nullable();
            $table->string('location', 255)->nullable();
            $table->string('water_level', 40)->nullable();
            $table->string('rel_level', 255)->nullable();
            $table->string('difficulty', 255)->nullable();
            $table->smallInteger('age')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accidents');
    }
}
