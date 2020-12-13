<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->text('abstract');
            $table->string('description', 255);
            $table->string('keywords', 255);
            $table->date('editdate')->nullable();
            $table->smallInteger('deleted')->default(0);
            $table->string('title', 100);
            $table->bigIncrements('id');
            $table->string('shortname', 45);
            $table->bigInteger('uid')->default(0);
            $table->bigInteger('recipient');
            $table->bigInteger('author');
            $table->string('document', 50);
            $table->bigInteger('document_size');

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
        Schema::dropIfExists('documents');
    }
}
