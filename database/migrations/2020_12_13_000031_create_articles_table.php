<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->bigIncrements('id');
            $table->unsignedBigInteger('news_article_id');
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
        Schema::dropIfExists('articles');
    }
}
