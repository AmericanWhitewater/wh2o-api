<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->bigIncrements('id');
            $table->bigInteger('revision');
            $table->bigInteger('uid');
            $table->bigInteger('sectionid');
            $table->text('name');
            $table->text('comments')->nullable();
            $table->date('posted')->nullable();
            $table->string('section', 25);
            $table->string('type', 10)->nullable();
            $table->date('deleted')->nullable();
            $table->bigInteger('duid')->nullable();
            $table->boolean('is_final');
            $table->boolean('is_private');

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
        Schema::dropIfExists('comments');
    }
}
