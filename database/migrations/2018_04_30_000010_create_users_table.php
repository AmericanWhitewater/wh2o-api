<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    const TABLE_NAME = 'users';

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(static::TABLE_NAME, function (Blueprint $table) {
            $table->uuid('user_id');
            $table->string('uname')->nullable();
            $table->string('upass')->nullable();
            $table->string('email')->unique();
            $table->timestamp('verifydate')->nullable(); // dup
            $table->timestamp('email_verified_at')->nullable(); // dup
            $table->string('password');
            $table->string('zip')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->char('state', 2)->nullable();
            $table->string('country')->nullable();
            $table->date('lastlogin')->nullable();
            $table->integer('volunteer')->nullable();
            $table->integer('alerts')->nullable(); // 'PREF: Want web alerts?'
            $table->integer('postal')->nullable(); // 'PREF: Trade Postal Address?'
            $table->bigInteger('memnum')->nullable(); // 'eTap Acct#'
            $table->string('address2')->nullable();
            $table->string('home_phone')->nullable();
            $table->string('work_phone')->nullable();
            $table->integer('journal')->nullable(); // 'PREF: Deliver Journal?'
            $table->integer('aw_beta')->nullable(); // 'PREF: Subscribe to AW_Beta'
            $table->string('mbr_level')->nullable();
            $table->integer('bad_addr')->nullable(); // 'FLAG:bad address flag from eTap'
            $table->integer('bad_email')->nullable(); // 'FLAG:bad email flag from eTap'
            $table->date('mod_date')->nullable(); // 'modified on '
            $table->string('record_type')->nullable(); // 'is this a business, organizaiton or something else (3)'
            $table->string('name')->nullable();
            $table->string('mem_transaction')->nullable(); // 'membership gift xaction #'
            $table->string('transaction_id')->nullable(); // 'donation gift xaction #'
            $table->date('expiration')->nullable();
            $table->date('modifydate')->nullable(); // 'when the record was modified' DUPLICATE?
            $table->date('pushdate')->nullable();
            $table->string('mbr_relation')->nullable();
            $table->text('prefs')->nullable();
            $table->integer('annual_renew')->nullable()->default(0); // 'annual renewal flag, prevents warning user too early'
            $table->integer('code')->nullable();
            $table->string('googleid')->nullable();
            $table->string('socialprofile')->nullable();
            $table->string('facebookid')->nullable();
            $table->string('epassword')->nullable(); // 'encrypted password.'
            $table->uuid('primary_role')->nullable();
            $table->foreign('primary_role')->references('role_id')->on('roles')->onDelete('set null');
            $table->primary('user_id');
            $table->rememberToken();
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
        Schema::dropIfExists(static::TABLE_NAME);
    }
}
