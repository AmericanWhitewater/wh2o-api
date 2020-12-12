<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRapidsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rapids', function (Blueprint $table) {
            $table->boolean('approximate')->default(true);
            $table->boolean('deleted')->default(false);
            $table->double('rlat')->default(0);
            $table->double('rloc')->geometry()->nullable();
            $table->double('rlon')->default(0);
            $table->id();
            $table->integer('distance')->nullable()->default(0); // real?
            $table->integer('photoid')->nullable();
            $table->integer('reachid');
            $table->integer('revision')->default(0);
            $table->integer('videoid')->nullable();
            $table->smallInteger('isaccess')->nullable();
            $table->smallInteger('ishazard')->nullable();
            $table->smallInteger('isplayspot')->nullable();
            $table->smallInteger('isportage')->nullable();
            $table->smallInteger('isputin')->nullable();
            $table->smallInteger('istakeout')->nullable();
            $table->smallInteger('iswaterfall')->nullable();
            $table->string('difficulty', 4)->nullable();
            $table->string('name', 80);
            $table->text('description')->nullable();
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
        Schema::dropIfExists('rapids');
    }
}
