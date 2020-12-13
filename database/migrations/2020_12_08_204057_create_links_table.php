<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linker_lists', function (Blueprint $table) {
            $table->id();
            $table->string('sourcecomp', 25);
            $table->string('sourceid', 25);
            $table->string('targetcomp', 25);
            $table->string('targetid', 25);
            $table->smallInteger('mutual');
            $table->date('expire_date')->nullable();
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
        Schema::dropIfExists('links');
    }
}
