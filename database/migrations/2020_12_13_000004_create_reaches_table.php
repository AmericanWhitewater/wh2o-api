<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReachesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reaches', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('accident_id');
            $table->string('river', 80);
            $table->string('section', 255);
            $table->string('altname', 80)->nullable();
            $table->string('county', 80)->nullable();
            $table->string('zipcode', 5)->nullable();
            $table->integer('length')->nullable();
            $table->integer('avggradient')->nullable();
            $table->integer('maxgradient')->nullable();
            $table->string('agency', 255)->nullable();
            $table->text('gaugeinfo')->nullable();
            $table->text('description')->nullable();
            $table->integer('photoid')->nullable();
            $table->integer('permitid')->nullable();
            $table->string('huc', 8)->nullable();
            $table->double('plat')->nullable();
            $table->double('plon')->nullable();
            $table->string('prrn', 20)->nullable();
            $table->double('tlat')->nullable();
            $table->double('tlon')->nullable();
            $table->string('trrn', 20)->nullable();
            $table->integer('skid')->nullable();
            $table->string('status')->default('u');
            $table->date('edited')->nullable();
            $table
                ->boolean('is_final')
                ->default(true)
                ->nullable();
            $table->integer('revision')->default(0);
            $table->enum('class', [
                'none',
                'I',
                'I(II)',
                'I(III)',
                'I(IV)',
                'I(V)',
                'I(V+)',
            ]);
            $table->geometry('ploc')->nullable();
            $table->geometry('tloc')->nullable();
            $table->boolean('was_final')->default(false);
            $table->boolean('thumboverride')->nullable();
            $table->text('shuttledetails')->nullable();
            $table->text('abstract')->nullable();
            $table->integer('direction_default')->nullable();
            $table->string('custom_destination')->nullable();
            $table->string('revision_comment', 255)->nullable();
            $table->text('permiturl')->nullable();
            $table->text('permitinfo')->nullable();
            $table->string('image_override', 255)->nullable();
            $table->geometry('geom')->nullable();

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
        Schema::dropIfExists('reaches');
    }
}
