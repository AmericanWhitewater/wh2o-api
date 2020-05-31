<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MetricIdStandard extends Migration
{
 const sql = <<<SQL
ALTER TABLE public.posts
    RENAME metric TO metric_id;
    


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
