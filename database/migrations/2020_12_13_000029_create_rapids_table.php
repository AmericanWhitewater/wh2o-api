<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->bigIncrements('id');
            $table->boolean('approximate')->default(true);
            $table
                ->double('rlat')
                ->default(0)
                ->nullable();
            $table->double('rloc')->nullable();
            $table
                ->double('rlon')
                ->default(0)
                ->nullable();
            $table
                ->integer('distance')
                ->default(0)
                ->nullable();
            $table->integer('photoid')->nullable();
            $table->integer('revision')->default(0);
            $table->integer('videoid')->nullable();
            $table->smallInteger('isaccess')->nullable();
            $table->smallInteger('ishazard')->nullable();
            $table->smallInteger('isplayspot')->nullable();
            $table->smallInteger('isportage')->nullable();
            $table->smallInteger('isputin')->nullable();
            $table->smallInteger('istakeout')->nullable();
            $table->smallInteger('iswaterfall')->nullable();
            $table->smallInteger('isother')->nullable();
            $table->smallInteger('israpid')->nullable();
            $table->string('difficulty', 4)->nullable();
            $table->string('name', 80);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('reach_id');

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
        Schema::dropIfExists('rapids');
    }
}
