<?php

use Illuminate\Database\Migrations\Migration;

class MakeReachAltnameNotNull extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("UPDATE reaches SET altname = '' WHERE altname IS NULL");

        DB::statement(
            <<<SQL
ALTER TABLE "reaches"
    ALTER COLUMN "altname" SET NOT NULL
SQL
        );
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
