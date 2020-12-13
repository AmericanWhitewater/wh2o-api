<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAffiliatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('affiliates', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('last', 50)->nullable();
            $table->string('url', 255)->nullable();
            $table->string('con_email', 120)->nullable();
            $table->bigInteger('members')->nullable();
            $table->text('contact')->nullable();
            $table->text('abstract')->nullable();
            $table->text('description')->nullable();
            $table->text('reaches')->nullable();
            $table->bigInteger('volunteer')->nullable();
            $table->string('city', 25);
            $table->char('state', 2);
            $table->char('expiration', 10);
            $table->bigInteger('member_id');
            $table->smallInteger('deleted')->nullable();

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
        Schema::dropIfExists('affiliates');
    }
}
