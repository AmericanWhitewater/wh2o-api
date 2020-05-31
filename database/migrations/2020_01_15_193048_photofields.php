<?php


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Photofields extends Migration
{
    const sql = <<<SQL

ALTER TABLE public.posts_photos
    drop COLUMN if exists rapid_name;


ALTER TABLE public.posts_photos
    ADD COLUMN rapid_name character varying(80);


ALTER TABLE public.posts_photos
    drop COLUMN if exists subject;

ALTER TABLE public.posts_photos
    ADD COLUMN subject character varying(255);

ALTER TABLE public.posts_photos
    drop COLUMN if exists author;


ALTER TABLE public.posts_photos
    ADD COLUMN author character varying(80);

ALTER TABLE public.posts_photos
    drop COLUMN if exists rapid_id;

ALTER TABLE public.posts_photos
    ADD COLUMN rapid_id integer;

ALTER TABLE public.posts_photos
    ADD COLUMN photo_date timestamp without time zone;


update posts_photos a
    set rapid_name = p.rapidname, subject = p.subject, author=p.author, 
        description = p.detail 
    from triplog_photos p where a.id = p.id;

CREATE EXTENSION fuzzystrmatch;


update posts_photos a 
    set rapid_id = r.id 
from posts p,rapids r where 
  a.post_id = p.id and p.reach_id = r.reach_id and difference(cast(r.name as text),cast(a.rapid_name as text)) >= 2;


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
