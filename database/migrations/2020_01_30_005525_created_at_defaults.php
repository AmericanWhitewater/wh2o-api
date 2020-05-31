<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedAtDefaults extends Migration
{
    const sql = <<<SQL
ALTER TABLE public.posts
    ALTER COLUMN created_at SET DEFAULT now();
    
ALTER TABLE public.posts
    ALTER COLUMN updated_at SET DEFAULT now();


ALTER TABLE public.reaches
    ALTER COLUMN created_at SET DEFAULT now();
    
ALTER TABLE public.reaches
    ALTER COLUMN updated_at SET DEFAULT now();

ALTER TABLE public.posts_comments
    ALTER COLUMN created_at SET DEFAULT now();
    
ALTER TABLE public.posts_comments
    ALTER COLUMN updated_at SET DEFAULT now();


ALTER TABLE public.posts_photos
    ALTER COLUMN created_at SET DEFAULT now();
    
ALTER TABLE public.posts_photos
    ALTER COLUMN updated_at SET DEFAULT now();

ALTER TABLE public.rapids
    ALTER COLUMN updated_at SET DEFAULT now();


ALTER TABLE public.articles
    ALTER COLUMN updated_at SET DEFAULT now();

ALTER TABLE public.articles
    ALTER COLUMN updated_at SET DEFAULT now();



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
