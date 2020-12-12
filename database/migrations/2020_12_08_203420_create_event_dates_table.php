<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventDatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_dates', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('event_id'); // 'nextVal(event_dateseq::regclass)'
            $table->date('evdate');
            $table->string('detail_description', 240)->nullable();
            $table->integer('batchid'); // ->default('nextVal(event_dateseq::regclass)')
            $table->time('starttime');
            $table->time('endtime');
            $table->string('tz', 3); // timezone
            $table->integer('mincfs')->nullable();
            $table->integer('maxcfs')->nullable();
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
        Schema::dropIfExists('event_dates');
    }
}
