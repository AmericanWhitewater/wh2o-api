<?php

use Illuminate\Database\Migrations\Migration;

use App\MetaControllers\RiverMetaController;

class CorrectUpstreamTakeouts extends Migration
{
    /**
     * Swap put-in / take-out locations where take-out is upstream of put-in.
     */
    public function up()
    {
        $riverMetaController = \App::Make(RiverMetaController::class);

        // rivers (and last edited dates) with coordinates to swap
        $rivers = array(
            836 => "2001-03-22 15:59:20",
            1309 => "2016-04-12 14:23:17",
            1328 => "2016-04-03 22:05:56",
            1379 => "2016-04-21 15:35:42",
            1619 => "2001-03-11 08:10:54",
            1739 => "2004-08-07 15:20:52",
            1936 => "2005-07-08 15:08:24",
            2794 => "2015-07-14 17:33:23",
            2919 => "2018-11-04 13:59:35",
            3136 => "2018-04-30 20:39:56",
            3371 => "2015-07-21 14:29:46",
            3415 => "2017-07-09 22:45:37",
            3746 => "2003-10-21 08:40:24",
            3797 => "2016-04-26 13:06:38",
            3856 => "2003-10-02 00:41:56",
            3933 => "2013-08-24 12:31:00",
            3957 => "2013-08-24 12:57:31",
            3977 => "2003-03-29 20:39:46",
            4133 => "2004-06-14 13:14:23",
            4384 => "2009-04-19 13:07:52",
            4392 => "2009-06-01 15:56:58",
            4491 => "2012-12-28 04:22:28",
            4539 => "2008-03-24 02:13:58",
            4573 => "2017-07-09 22:28:55",
            4680 => "2018-01-27 21:19:47",
            5139 => "2016-04-26 13:29:15",
            5237 => "2007-07-08 07:42:06",
            5424 => "2018-05-04 17:42:40",
            6812 => "2018-05-01 23:46:12",
            6828 => "2019-01-27 16:33:16",
            10266 => "2013-08-24 12:49:35",
            10460 => "2011-03-06 15:35:51",
            //10559 => "2011-11-25 12:39:31", this breaks import
            10461 => "2011-03-06 15:53:23",
            
            10737 => "2015-05-16 10:51:22",
            10945 => "2019-01-18 21:00:02",
            10963 => "2017-06-23 09:17:48",
            10998 => "2017-10-20 11:11:40"
        );

        //wrap this all in a transaction
       
        
        foreach ($rivers as $id => $edited) {
            $river = $riverMetaController->getDetailByRevision($id);

            print "\nProcessing $id...";
            if ($river["edited"] == $edited) {
                // skip rivers that have been modified more recently
                $riverMetaController->updateRiver($id, array(
                    "plat" => $river["tlat"],
                    "plon" => $river["tlon"],
                    "tlat" => $river["plat"],
                    "tlon" => $river["plon"]
                ), "Swap put-in / take-out locations (take-out is upstream of put-in)");
            }
            
            
        }
        
        
    }
}
