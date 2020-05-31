<?php


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Posts extends Migration
{
    const sql = <<<SQL


create sequence  if not exists posts_id_seq;

create sequence  if not exists posts_revision_seq;


CREATE TABLE public.posts
(
    id bigint NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
    title character varying(80) COLLATE pg_catalog."default",
    detail text COLLATE pg_catalog."default",
    revision bigint NOT NULL DEFAULT nextval('posts_revision_seq'::regclass),
    reach_id bigint,
    gauge_id bigint,
    post_type integer,
    uid integer,
    deleted boolean,
    is_final boolean,
    reading double precision,
    metric integer,
    post_date date,
    created_at timestamp(6) with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    level real,
    CONSTRAINT posts_pkey PRIMARY KEY (revision)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.posts
    OWNER to wh2o;

COMMENT ON COLUMN public.posts.id
    IS 'id of post';

COMMENT ON COLUMN public.posts.title
    IS 'title (optional)';

COMMENT ON COLUMN public.posts.detail
    IS 'what does the poster want to say?';

COMMENT ON COLUMN public.posts.revision
    IS 'revision (for deleted comments)';

COMMENT ON COLUMN public.posts.reach_id
    IS 'river to link to (if any)';

COMMENT ON COLUMN public.posts.gauge_id
    IS 'gauge to link to ';

COMMENT ON COLUMN public.posts.post_type
    IS 'post type';

COMMENT ON COLUMN public.posts.uid
    IS 'user id of the poster';

COMMENT ON COLUMN public.posts.deleted
    IS 'is this deleted';

COMMENT ON COLUMN public.posts.is_final
    IS 'is this a final version of this post';

COMMENT ON COLUMN public.posts.reading
    IS 'reading of said gauge';

COMMENT ON COLUMN public.posts.metric
    IS 'metric of gauge reading';

COMMENT ON COLUMN public.posts.post_date
    IS 'date recorded';

COMMENT ON COLUMN public.posts.created_at
    IS 'eloquent created at';

COMMENT ON COLUMN public.posts.updated_at
    IS 'eloquent updated at.';

COMMENT ON COLUMN public.posts.level
    IS 'relative level of the river (high, low, or running)';

ALTER TABLE public.posts
    ADD COLUMN editor_uid integer;



COMMENT ON COLUMN public.posts.editor_uid
    IS 'if edited, this uid did it.';



create sequence  if not exists posts_comments_revision_seq;


create sequence  if not exists posts_comments_id_seq;


CREATE TABLE public.posts_comments
(
    id bigint NOT NULL DEFAULT nextval('posts_comments_id_seq'::regclass),
    post_id bigint NOT NULL,
    comment text COLLATE pg_catalog."default" NOT NULL,
    uid integer NOT NULL,
    comment_date timestamp without time zone NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    revision bigint NOT NULL DEFAULT nextval('posts_comments_revision_seq'::regclass),
    deleted boolean NOT NULL,
    is_final boolean NOT NULL,
    CONSTRAINT posts_comments_pkey PRIMARY KEY (revision)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.posts_comments
    OWNER to wh2o;
    
    
create sequence  if not exists posts_photos_id_seq;


CREATE TABLE public.posts_photos
(
    id bigint NOT NULL DEFAULT nextval('posts_photos_id_seq'::regclass),
    post_id bigint NOT NULL,
    caption character varying(255) COLLATE pg_catalog."default",
    url character varying(255) COLLATE pg_catalog."default",
    ext character varying(6) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    deleted boolean,
    CONSTRAINT posts_photos_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.posts_photos
    OWNER to wh2o;
COMMENT ON TABLE public.posts_photos
    IS 'photos uploaded';
    
    
    




















insert into posts (









"id", 
title, 
detail, 
post_type, 
uid, 
reach_id, 
gauge_id, 
reading, 
metric, 
post_date,
deleted, 
is_final,
created_at,
updated_at

)  
select 






"id",
null,
description,
100,
case when uid is null then 0 else uid end,
reachid,
gaugeid,
reading,
metric,
case when obs_time is null then '1970-01-01 00:00:00' else obs_time end,
deleted,
true,
now(), 
now()


from triplog;




insert into posts_photos (

id,
post_id,
caption,
url,
ext,
description,
deleted

)
select 
id,
triplog_id,
caption, 
url,
case when length(ext) > 6 then 'jpg' else ext end,
concat(detail,'\nAuthor:', author, '\nRapid: ', rapidname, '\nSubject: ', subject),
deleted

from triplog_photos where triplog_id is not null;


insert into posts 
(    
id,
detail,
post_type,   
uid,
reach_id,
post_date,
is_final,
deleted,
created_at,
updated_at
)


select 

id+100000000,
comments,
case when type = 'warning' then 502  
 when type = 'comment' then 500  
 when type = 'complaint' then 501 end,
case when uid is null then 0 else uid end,
cast( sectionid as integer),
posted,
is_final, 
deleted is not null,
now(),
now()
from comments
where ( section = 'reach'  or section = 'river');


ALTER TABLE public.posts
    ADD COLUMN deleted_at timestamp without time zone;

update posts set deleted_at = now() where deleted = true;

alter table posts drop column deleted ;


ALTER TABLE public.posts_comments
    ADD COLUMN deleted_at timestamp without time zone;

update posts_comments set deleted_at = now() where deleted = true;

alter table posts_comments drop column deleted ;


ALTER TABLE public.posts_photos
    ADD COLUMN deleted_at timestamp without time zone;

ALTER TABLE public.posts_photos
    ADD COLUMN updated_at timestamp without time zone;

ALTER TABLE public.posts_photos
    ADD COLUMN created_at timestamp without time zone;


update posts_photos set deleted_at = now() where deleted = true;

alter table posts_photos drop column deleted ;



ALTER TABLE public.rapids
    ADD COLUMN deleted_at timestamp without time zone;

ALTER TABLE public.rapids
    ADD COLUMN updated_at timestamp without time zone;

 update rapids set deleted_at = now() where deleted = true;
    

alter table rapids drop column deleted ;

ALTER TABLE public.rapids
    RENAME photoid TO photo_id;

ALTER TABLE public.rapids
    RENAME reachid TO reach_id;

ALTER TABLE public.rapids
    RENAME rapidid TO id;

ALTER TABLE public.reaches
    RENAME photoid TO photo_id;

ALTER TABLE public.reaches
    ADD COLUMN created_at timestamp without time zone;

ALTER TABLE public.reaches
    ADD COLUMN deleted_at timestamp without time zone;

ALTER TABLE public.reaches
    ADD COLUMN updated_at timestamp without time zone;


ALTER TABLE public.rapids
    ADD COLUMN skid integer;

COMMENT ON COLUMN public.rapids.skid
    IS 'sk who made the change';




ALTER TABLE public.awarticles
    RENAME articleid TO id;

ALTER TABLE public.awarticles
    ADD COLUMN created_at timestamp without time zone;

ALTER TABLE public.awarticles
    ADD COLUMN updated_at timestamp without time zone;

ALTER TABLE public.awarticles
    ADD COLUMN deleted_at timestamp without time zone;

ALTER TABLE public.awarticles
    ADD COLUMN revision serial NOT NULL;


ALTER TABLE public.awarticles
    ADD COLUMN is_final boolean NOT NULL default true;


update awarticles set deleted_at = now() where deleted = 1;
    

alter table awarticles drop column deleted ;

ALTER TABLE public.awarticles
    RENAME TO articles;


ALTER TABLE public.awnews
    ADD COLUMN value character varying(12);

insert into awnews (articleid, type,value,expiration,priority) select articleid, type,value,expiration,priority from awalerts where type is not null ON CONFLICT do nothing;


ALTER TABLE public.awnews
    RENAME TO news;

ALTER TABLE public.news
    RENAME articleid TO article_id;


drop table if exists awarticle;


ALTER SEQUENCE  IF EXISTS public.awarticles_articleid_seq
    RENAME TO articles_id_seq;

ALTER SEQUENCE  IF EXISTS public.awarticles_revision_seq
    RENAME TO articles_revision_seq;

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
