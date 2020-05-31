<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PostObservation extends Migration
{
    const sql = <<<SQL
ALTER TABLE public.posts
    ADD COLUMN observation real;

COMMENT ON COLUMN public.posts.observation
    IS 'relative level -- hidden in cases where relative observation is already recorded';

SQL;

    public function up()
    {
        $statements = explode(';',self::sql);
        foreach($statements as $s)
        {
            print "\"$s\"";
            if(!ctype_space($s))
            {
                DB::statement($s);
            }
            print "---";
        }

    }

    public function down(){}


}
