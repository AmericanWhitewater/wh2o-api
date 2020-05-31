<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;

class RemoveDerivedReachCoordinates extends Migration
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
CREATE OR REPLACE VIEW reach_map AS
 SELECT r.id,
    (r.river::text || ' - '::text) || r.section::text AS name,
    reaches_states.state::text AS state,
    r.river,
    r.section,
    r.altname,
    r.county,
    r.zipcode,
    r.huc,
    ST_Y(r.ploc) plat,
    ST_X(r.ploc) plon,
    ST_Y(r.tloc) tlat,
    ST_X(r.tloc) tlon,
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
    rs.range_comment
   FROM reaches r
     LEFT JOIN river_summary rs ON r.id = rs.id::integer
     LEFT JOIN reaches_states ON reaches_states.reach_id = r.id
  WHERE r.is_final = true
SQL
        );

        Schema::table('reaches', function ($table) {
            $table->dropColumn(['plat', 'plon', 'tlat', 'tlon']);
        });

        DB::statement(
            <<<SQL
CREATE OR REPLACE FUNCTION public._reaches_rf_fixpoints () RETURNS trigger AS $$
BEGIN
  if( NEW.ploc is not null and NEW.county is null ) then
    NEW.county := 'n/a';
    select into NEW.county  county from gis_counties c where
      NEW.ploc && c.the_geom AND st_within(NEW.ploc,c.the_geom) limit 1;
  end if;

  if( NEW.ploc is not null and NEW.huc is null ) then
    NEW.huc := '00000000';
    select into NEW.huc huc_code from gis_hucs c where
      NEW.ploc && c.the_geom AND st_within(NEW.ploc,c.the_geom) limit 1;
  end if;

  if( NEW.ploc is not null and NEW.zipcode is null ) then
    NEW.zipcode := '00000';
    select into NEW.zipcode zip from gis_zips c where
      NEW.ploc && c.the_geom AND st_within(NEW.ploc,c.the_geom) limit 1;
  end if;

  RETURN NEW;
END;
$$ LANGUAGE 'plpgsql' VOLATILE CALLED ON NULL INPUT SECURITY INVOKER COST 100;
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
