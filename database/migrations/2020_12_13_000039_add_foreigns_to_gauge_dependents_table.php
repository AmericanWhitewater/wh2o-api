<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignsToGaugeDependentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('gauge_dependents', function (Blueprint $table) {
            $table
                ->foreign('ghid')
                ->references('id')
                ->on('gauge_dependent_headers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gauge_dependents', function (Blueprint $table) {
            $table->dropForeign(['ghid']);
        });
    }
}
