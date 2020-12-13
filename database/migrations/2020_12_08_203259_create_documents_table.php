<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->bigInteger('documentid')->primary();
            $table->string('shortname', 45);
            $table->text('abstract');
            $table->string('description', 255);
            $table->bigInteger('uid')->default(0);
            $table->string('keywords', 255);
            $table->date('editdate')->nullable();
            $table->bigInteger('recipient');
            $table->bigInteger('author');
            $table->string('document', 50);
            $table->smallInteger('deleted')->default(0);
            $table->string('title', 100);
            $table->bigInteger('document_size');
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
        Schema::dropIfExists('documents');
    }
}
