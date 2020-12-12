<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('title', 80)->nullable();
            $table->string('city', 80)->nullable();
            $table->text('description');
            $table->integer('cat')->nullable();
            $table->integer('uid')->nullable();
            $table->char('state', 2)->nullable();
            $table->string('url', 255)->nullable();
            $table->string('orgname', 50)->nullable();
            $table->string('orgaddress', 255)->nullable();
            $table->string('orgphone', 14)->nullable();
            $table->string('orgfax', 14)->nullable();
            $table->string('orgemail', 255)->nullable();
            $table->string('site', 255)->nullable();
            $table->integer('rivid')->nullable();
            $table->integer('expectpart')->nullable();
            $table->integer('expectspec')->nullable();
            $table->text('issue')->nullable();
            $table->text('media')->nullable();
            $table->smallInteger('nowreventinfo')->nullable()->default(0);
            $table->integer('contact_id')->nullable();
            $table->text('html_description')->nullable();
            $table->smallInteger('retired')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
