<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Postids extends Migration
{    private const sql = /** @lang PostgreSQL */
    <<<SQL
ALTER TABLE posts ADD COLUMN new_id varchar(12) NULL;
UPDATE posts SET new_id = CAST(id as varchar(12));
ALTER TABLE posts DROP COLUMN id;
ALTER TABLE posts RENAME COLUMN new_id TO id;
ALTER TABLE posts ALTER COLUMN id SET NOT NULL;

ALTER TABLE public.posts_photos
    ADD COLUMN revision serial NOT NULL;

ALTER TABLE public.posts_photos
    ADD COLUMN is_final boolean NOT NULL default true;


ALTER TABLE posts_photos ADD COLUMN new_id varchar(12) NULL;
UPDATE posts_photos SET new_id = CAST(id as varchar(12));
ALTER TABLE posts_photos DROP COLUMN id;
ALTER TABLE posts_photos RENAME COLUMN new_id TO id;
ALTER TABLE posts_photos ALTER COLUMN id SET NOT NULL;

SQL;

    public function up()
    {
        $statements = explode(';',self::sql);
        foreach($statements as $s)
        {
            print "\n/**/".($s);
            if(!ctype_space($s) && strlen($s)>1)
            {
                DB::statement($s);
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
