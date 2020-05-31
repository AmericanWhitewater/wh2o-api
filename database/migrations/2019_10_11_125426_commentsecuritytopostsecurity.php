<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Commentsecuritytopostsecurity extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        $sql = [
"update security set domain = 'PostSecurity' where domain = 'CommentGadget';",
"update security set action = 'create' where domain='PostSecuirty' and action = 'new';",
"update security set action = 'delete' where domain='PostSecuirty' and action = 'remove';",
"update security set action = 'update' where domain='PostSecuirty' and action = 'edit';"
        ];

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
