<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ExpandUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        DB::statement(<<<SQL
 
 
            ALTER TABLE "users"
            ALTER COLUMN "uname" TYPE varchar(128) COLLATE "pg_catalog"."default",
            ALTER COLUMN "upass" TYPE varchar(128) COLLATE "pg_catalog"."default",
            ALTER COLUMN "email" TYPE varchar(256) COLLATE "pg_catalog"."default",
            ALTER COLUMN "city" TYPE varchar(64) COLLATE "pg_catalog"."default",
            ALTER COLUMN "address2" TYPE varchar(256) COLLATE "pg_catalog"."default",
            ALTER COLUMN "epassword" TYPE varchar(128) COLLATE "pg_catalog"."default";    
        
SQL
);

    DB::statement(<<<SQL

        ALTER TABLE "contacts" 
        ALTER COLUMN "bio" SET DEFAULT '',
        ALTER COLUMN "territory" SET DEFAULT '',
        ALTER COLUMN "country_code" SET DEFAULT 'us';

SQL
  
        );
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
