<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AccidentNormalize extends Migration
{
     const sql = <<<SQL
ALTER TABLE public.accidents
    RENAME reachid TO reach_id;

ALTER TABLE public.accidents
    ADD COLUMN created_at timestamp without time zone;

ALTER TABLE public.accidents
    ADD COLUMN deleted_at timestamp with time zone;

ALTER TABLE public.accidents
    ADD COLUMN updated_at timestamp without time zone;

ALTER TABLE public.accidents
    ADD COLUMN revision serial;

ALTER TABLE public.accidents
    ADD COLUMN is_final boolean;

ALTER TABLE public.accidents
    ADD COLUMN uid integer;

    ALTER TABLE public.accidents
    alter COLUMN is_final  set default true ;

update  accidents set is_final = true;

ALTER TABLE public.accidents
  alter COLUMN is_final  
    set NOT NULL ;


SQL;


    public function up()
    {
        $statements = explode(';',self::sql);
        foreach($statements as $s)
        {
            if(!ctype_space($s)){DB::statement($s);}
        }

    }

}
