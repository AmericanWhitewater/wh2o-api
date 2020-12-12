<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->id();
            $table->timestamps();
            $table->string('river', 80);
            $table->string('section', 255);
            $table->string('altname', 80)->nullable();
            $table->string('county', 80)->nullable();
            $table->string('zipcode', 5)->nullable();
            $table->integer('length')->nullable(); // wrong
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
            $table->string('status', 1)->default('u'); // "'u' = unverified, 'v'=verified, 'd'=deleted"
            $table->date('edited')->nullable();
            $table->boolean('is_final')->default(true)->nullable();
            $table->integer('revision');
            // $table->enum('class', array('none', 'I', 'I(II)', 'I(III)', 'I(IV)', 'I(V)', 'I(V+)', 'I-II', 'I-II(III)', 'I-II(IV)', 'I-II(V)', 'I-II(V+)', 'II', 'II(III)', 'II(IV)', 'II(V)', 'II(V+)', 'I-II+(III)', 'I-II+(IV)', 'I-II+(V)', 'I-II+(V+)', 'II+', 'II+(III)', 'II+(IV)', 'II+(V)', 'II+(V+)', 'I-III', 'I-III(IV)', 'I-III(V)', 'I-III(V+)', 'II-III', 'II-III(IV)', 'II-III(V)', 'II-III(V+)', 'III', 'I-III+', 'I-III+(IV)', 'I-III+(V)', 'I-III+(V+)', 'II-III+', 'II-III+(IV)', 'II-III+(V)', 'II-III+(V+)', 'III+', 'III+(IV)', 'III+(V)', 'III+(V+)', 'I-IV', 'I-IV(V)', 'I-IV(V+)', 'II-IV', 'II-IV(V)', 'II-IV(V+)', 'III-IV', 'III-IV(V)', 'III-IV(V+)', 'IV', 'IV(V)', 'IV(V+)', 'I-IV+', 'I-IV+(V)', 'I-IV+(V+)', 'II-IV+', 'II-IV+(V)', 'II-IV+(V+)', 'III-IV+', 'III-IV+(V)', 'III-IV+(V+)', 'IV+', 'I-V', 'I-V(V+)', 'II-V', 'II-V(V+)', 'III-V', 'III-V(V+)', 'IV-V', 'IV-V(V+)', 'V', 'II-V+', 'III-V+', 'IV-V+', 'V+'));
            $table->text('class');
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
