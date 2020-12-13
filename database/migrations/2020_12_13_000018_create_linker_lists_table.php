<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinkerListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linker_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('sourcecomp', 25);
            $table->string('sourceid', 25);
            $table->string('targetcomp', 25);
            $table->string('targetid', 25);

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
        Schema::dropIfExists('linker_lists');
    }
}
