<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Twelvetotwentyone extends Migration
{
    private const sql = /** @lang PostgresSQL */
        <<<SQL
ALTER TABLE public.posts
    ALTER COLUMN id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.posts_photos
    ALTER COLUMN id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.posts_photos
    ALTER COLUMN post_id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.posts_comments
    ALTER COLUMN id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.posts_comments
    ALTER COLUMN post_id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.users
    ADD COLUMN mobile_profile jsonb;
ALTER TABLE public.rapids
    ALTER COLUMN photo_id TYPE character varying(21) COLLATE pg_catalog."default";
ALTER TABLE public.reaches
    ALTER COLUMN photo_id TYPE character varying(21) COLLATE pg_catalog."default";

COMMENT ON COLUMN public.users.mobile_profile
    IS 'profile settings for mobile';

alter table users add column new_prefs jsonb;

update users set new_prefs = replace(
	replace(
		replace( 
			(case when coalesce(prefs, '') = '' then null else prefs end )  
		,'"{','{')
	,'}"','}'),
'\"','"')::json;

alter table users drop column prefs;
alter table users rename column new_prefs to prefs;



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
