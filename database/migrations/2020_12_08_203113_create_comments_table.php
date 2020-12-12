<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('uid');
            $table->bigInteger('sectionid');
            $table->text('name');
            $table->text('comments')->nullable();
            $table->date('posted')->nullable();
            $table->string('section', 25)->default('river');
            $table->string('type', 10)->nullable();
            $table->date('deleted')->nullable();
            $table->bigInteger('duid')->nullable();
            $table->bigInteger('revision');
            $table->boolean('is_final');
            $table->boolean('is_private');
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
        Schema::dropIfExists('comments');
    }
}
