<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PostId extends Migration
{
    private const sql = /** @lang PostgresSQL */
        <<<SQL
ALTER TABLE posts_photos ADD COLUMN new_id varchar(12) NULL;
UPDATE posts_photos SET new_id = CAST(post_id as varchar(12));
ALTER TABLE posts_photos DROP COLUMN post_id;
ALTER TABLE posts_photos RENAME COLUMN new_id TO post_id;
ALTER TABLE posts_photos ALTER COLUMN post_id SET NOT NULL;

ALTER TABLE posts_comments ADD COLUMN new_id varchar(12) NULL;
UPDATE posts_comments SET new_id = CAST(post_id as varchar(12));
ALTER TABLE posts_comments DROP COLUMN post_id;
ALTER TABLE posts_comments RENAME COLUMN new_id TO post_id;
ALTER TABLE posts_comments ALTER COLUMN post_id SET NOT NULL;

ALTER TABLE posts_comments ADD COLUMN new_id varchar(12) NULL;
UPDATE posts_comments SET new_id = CAST(id as varchar(12));
ALTER TABLE posts_comments DROP COLUMN id;
ALTER TABLE posts_comments RENAME COLUMN new_id TO id;
ALTER TABLE posts_comments ALTER COLUMN id SET NOT NULL;


ALTER TABLE reaches ADD COLUMN new_id varchar(12) NULL;
UPDATE reaches SET new_id = CAST(photo_id as varchar(12));
ALTER TABLE reaches DROP COLUMN photo_id;
ALTER TABLE reaches RENAME COLUMN new_id TO photo_id;

ALTER TABLE rapids ADD COLUMN new_id varchar(12) NULL;
UPDATE rapids SET new_id = CAST(photo_id as varchar(12));
ALTER TABLE rapids DROP COLUMN photo_id;
ALTER TABLE rapids RENAME COLUMN new_id TO photo_id;


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
    }}
