<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
class AllTablesPublic extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $sequences = ['awarticles_articleid_seq','comments_id_seq','comments_revision_seq','comments_contactid_seq','documents_documentid_seq','journal_artid_seq','jrbiblio_artid_seq','linker_lists_id_seq','listinggroups_lgid_seq','member_update_stats_id_seq','membership_types_id_seq','projects_id_seq','security_sid_seq','user_uid_seq'];
        $tables = DB::select('SELECT * FROM pg_catalog.pg_tables where schemaname=\'wh2o\'');
        DB::beginTransaction();
        foreach($sequences as $s)
        {
            try
            {
                DB::update('drop sequence if exists public."'.$s.'" cascade;');
            }
            catch(\Exception $e)
            {
                print $e->getMessage()."\n";
            }
        }
        DB::commit();
        foreach($tables as $t)
        {
            $table = $t->tablename;
            try
            {
                DB::beginTransaction();
            
                DB::update('ALTER TABLE wh2o."'.$table.'" SET SCHEMA public;');
                
                DB::commit();
            }
            catch(\Exception $e)
            {
                
                DB::rollback();
                DB::beginTransaction();
                DB::update('drop table if exists wh2o."'.$table.'" cascade');
                DB::commit();
            }
            
        }

        try
        {
            DB::beginTransaction();
            DB::update('ALTER FUNCTION wh2o."sec_updateMemberUserGroups"() SET SCHEMA public;');
//            DB::endTransaction();
//            DB::commit();
//            DB::beginTransaction();
            DB::update('ALTER VIEW wh2o."sec_updateMemberUserGroups_contactheader" SET SCHEMA public;');
//            DB::endTransaction();
            DB::commit();
        }
        catch(\Exception $e)
        {
            print $e->getMessage()."\n";
            DB::rollback();
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
