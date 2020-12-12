<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJournalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journals', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('artid');
            $table->text('arttitle');
            $table->text('artdate');
            $table->bigInteger('startpage')->default(0);
            $table->bigInteger('endpage')->default(0);
            $table->bigInteger('volume')->default(0);
            $table->bigInteger('issuenumber')->default(0);
            $table->bigInteger('issueyear')->default(0);
            $table->bigInteger('scanner_uid')->nullable();
            $table->text('pdfsize')->nullable();
            $table->smallInteger('forpublic')->nullable();
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
        Schema::dropIfExists('journals');
    }
}
