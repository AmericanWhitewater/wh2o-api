<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->bigInteger('uid')->nullable();
            $table->string('type', 10)->nullable();
            $table->string('name', 50)->nullable();
            $table->string('city', 50)->nullable();
            $table->text('address')->nullable();
            $table->char('state', 2)->nullable();
            $table->string('zip', 10)->nullable();
            $table->string('email', 120)->nullable();
            $table->string('phone', 25)->nullable();
            $table->string('fax', 25)->nullable();
            $table->bigInteger('contactid');
            $table->text('bio');
            $table->string('lname', 25)->nullable();
            $table->string('fname', 25)->nullable();
            $table->string('photo', 24)->default('');
            $table->string('company', 45)->default('');
            $table->string('position', 45)->nullable();
            $table->string('territory', 45)->default('');
            $table->char('country_code', 2)->default('us');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contacts');
    }
}
