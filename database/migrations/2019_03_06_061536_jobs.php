<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Jobs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $sql = [];
        $sql[] = <<<SQL1

CREATE or replace VIEW "wh2o"."sec_updateMemberUserGroups_contactheader" AS  

SELECT 
    'user'::text AS listing,
    '' AS area,
    NULL::text AS title,
    contacts.contactid,
    0 AS sortid,
    0 AS mailingexempt,
    0 AS manager,
    0 AS candisplay
   FROM (contacts
     LEFT JOIN users ON ((users.uid = contacts.contactid)))
  WHERE ((now() - '120 days'::interval) <= users.verifydate)
UNION
 SELECT 
    'member'::text AS listing,
    '' AS area,
    NULL::text AS title,
    contacts.contactid,
    0 AS sortid,
        CASE
            WHEN (users.alerts > 0) THEN 1
            ELSE 0
        END AS mailingexempt,
    0 AS manager,
    0 AS candisplay
   FROM (contacts
     LEFT JOIN users ON ((users.uid = contacts.contactid)))
  WHERE (users.expiration > now())
UNION
 SELECT 
    'user'::text AS listing,
    '' AS area,
    NULL::text AS title,
    contacts.contactid,
    0 AS sortid,
        CASE
            WHEN (users.alerts > 0) THEN 1
            ELSE 0
        END AS mailingexempt,
    0 AS manager,
    0 AS candisplay
   FROM (contacts
     LEFT JOIN users ON ((users.uid = contacts.contactid)))
  WHERE (users.expiration > now());


SQL1
;


        $sql[] = <<<'SQL4'


        ALTER TABLE "wh2o"."sec_updateMemberUserGroups_contactheader" OWNER TO "wh2o";

SQL4
;



        $sql[] = <<<'SQL2'


CREATE OR REPLACE FUNCTION wh2o."sec_updateMemberUserGroups"(   )
    RETURNS boolean
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
AS $BODY$
    BEGIN
    -- Routine body goes here...

insert into contacts (contactid, name, uid) 
 
  (select users.uid, users.name, users.uid from users left join contacts on contacts.contactid = users.uid where contactid is null);

update contacts as c set name = ua.name from users as ua where ua.uid = c.contactid and (c.name = '' or c.name is null) and (ua.name <> '' and ua.name is not null);

delete from contactheader where listing = 'member' or listing = 'user';

insert into contactheader  (select listing,area,title,contactid,max(sortid),max(mailingexempt),max(manager),max(candisplay) from "sec_updateMemberUserGroups_contactheader" group by listing,area,title,contactid );

    RETURN 't';
END
$BODY$;


SQL2
;


    $sql[] = <<<'SQL3'


ALTER FUNCTION wh2o."sec_updateMemberUserGroups"()
    OWNER TO wh2o;

SQL3
;

        foreach($sql as $s)
        {
            DB::statement($s);
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
