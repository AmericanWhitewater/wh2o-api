<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Systemadminuser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        \DB::statement('delete from users where uid=1;');
        \DB::statement("insert into users(uid,uname,email,verifydate,epassword) values (1,'system admin','root@localhost','2020-01-01','x');");

        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
