<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Poionpost extends Migration
{
    private const sql = /** @lang PostgresSQL */
        <<<SQL
ALTER TABLE public.posts_photos
    RENAME rapid_id TO poi_id;

ALTER TABLE public.posts_photos
    RENAME rapid_name TO poi_name;



SQL;

    public function up()
    {
        $statements = explode(';',self::sql);
        foreach($statements as $s)
        {
            print "\n/**/".($s);
            if(!ctype_space($s) && strlen($s)>1)
            {
                \DB::statement($s);
            }
            else
            {
                print "/*skip*/";
            }
            print "/**/\n";
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
