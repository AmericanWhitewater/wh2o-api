<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PostRevision extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        $sql = <<<SQL

        ALTER TABLE public.posts
        ALTER COLUMN post_date SET DEFAULT now();

        update posts set post_date = now() where post_date is null;

        ALTER TABLE public.posts
        ALTER COLUMN post_date SET NOT NULL;
    
SQL;
    
        $statements = explode(';',$sql);
        foreach($statements as $s)
        {
            if(!ctype_space($s)){DB::statement($s);}
        }

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
