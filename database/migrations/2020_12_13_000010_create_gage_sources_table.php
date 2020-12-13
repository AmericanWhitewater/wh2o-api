<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGageSourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gage_sources', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('source', 8);
            $table->string('title', 75)->nullable();
            $table->string('url', 200)->nullable();
            $table->char('update_type', 1)->default('h');
            $table
                ->integer('update_frequency')
                ->default(0)
                ->nullable();
            $table->time('update_start_time')->default('now()');
            $table->char('data', 512)->nullable();
            $table
                ->date('populated')
                ->default('now()')
                ->nullable();
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
        Schema::dropIfExists('gage_sources');
    }
}
