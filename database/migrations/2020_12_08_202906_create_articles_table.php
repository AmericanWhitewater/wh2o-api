<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title', 80)->nullable();
            $table->string('author', 50)->nullable();
            $table->text('abstract')->nullable();
            $table->string('abstract_photo', 24)->nullable();
            $table->string('icon', 50)->nullable();
            $table->smallInteger('has_contents')->nullable();
            $table->text('contents')->nullable();
            $table->string('contents_photo', 24)->nullable();
            $table->string('contact', 50)->nullable();
            $table->date('posted')->nullable();
            $table->string('short_name', 65);
            $table->bigInteger('uid');
            $table->date('release_date')->nullable();
            $table->smallInteger('deleted')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
