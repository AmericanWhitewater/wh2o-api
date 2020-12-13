<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('remember_token', 100)->nullable();
            $table->unsignedBigInteger('uid');
            $table->string('uname')->nullable();
            $table->string('upass')->nullable();
            $table->string('email')->unique();
            $table->string('google_id')->nullable();
            $table->string('facebook_id')->nullable();
            $table->string('epassword')->nullable();
            $table->string('zip')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->date('lastlogin')->nullable();
            $table->integer('volunteer')->nullable();
            $table->integer('alerts')->nullable();
            $table->integer('postal')->nullable();
            $table->bigInteger('memnum')->nullable();
            $table->string('address2')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('work_phone')->nullable();
            $table->integer('journal')->nullable();
            $table->integer('aw_beta')->nullable();
            $table->string('mbr_level')->nullable();
            $table->integer('bad_addr')->nullable();
            $table->integer('bad_email')->nullable();
            $table->date('mod_date')->nullable();
            $table->string('record_type')->nullable();
            $table->string('name')->nullable();
            $table->string('mem_transaction')->nullable();
            $table->string('transaction_id')->nullable();
            $table->date('expiration')->nullable();
            $table->date('modifydate')->nullable();
            $table->date('pushdate')->nullable();
            $table->string('mbr_relation')->nullable();
            $table->text('prefs')->nullable();
            $table
                ->integer('annual_renew')
                ->default(0)
                ->nullable();
            $table->integer('code')->nullable();
            $table->string('social_profile')->nullable();

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
        Schema::dropIfExists('users');
    }
}
