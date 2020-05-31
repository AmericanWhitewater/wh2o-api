<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GeomAndGaugenameInReachmap extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

    DB::statement(
            <<<SQL



CREATE OR REPLACE VIEW public.reach_map AS
 SELECT r.id,
    (r.river::text || ' - '::text) || r.section::text AS name,
    reaches_states.state::text AS state,
    r.river,
    r.section,
    r.altname,
    r.county,
    r.zipcode,
    r.huc,
    st_y(r.ploc) AS plat,
    st_x(r.ploc) AS plon,
    st_y(r.tloc) AS tlat,
    st_x(r.tloc) AS tlon,
    r.skid,
    r.class,
    r.abstract,
    rs.updated,
    rs.reading,
    rs.gauge_min,
    rs.gauge_max,
    rs.gauge_metric,
    rs.obs_id,
    rs.gauge_id,
    rs.gauge_reading,
    rs.last_gauge_reading,
    rs.last_gauge_updated,
    rs.gauge_comment,
    rs.gauge_data,
    rs.river_data,
    rs.last_journal_update,
    r.ploc AS tloc,
    r.tloc AS ploc,
    r.status,
    rs.adjusted_reach_class,
    rs.gauge_important,
    rs.gauge_estimated,
    rs.gauge_perfect,
    rs.range_comment,
    r.geom,
    h.name AS gauge_name
   FROM reaches r
     LEFT JOIN river_summary rs ON r.id = rs.id::integer
     LEFT JOIN reaches_states ON reaches_states.reach_id = r.id
     LEFT JOIN gauge_headers h ON rs.gauge_id = h.id
  WHERE r.is_final = true;

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
    }
}
