<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
            $table->bigIncrements('id');

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
        Schema::dropIfExists('journals');
    }
}
