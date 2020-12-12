<?php

namespace App\Http\Controllers;

use App\GaugePersonalSettings;
use Illuminate\Http\Request;

class GaugePersonalSettingsController extends Controller
{

    public static $model = GaugePersonalSettings::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\GaugePersonalSettings  $gaugePersonalSettings
     * @return \Illuminate\Http\Response
     */
    public function show(GaugePersonalSettings $gaugePersonalSettings)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\GaugePersonalSettings  $gaugePersonalSettings
     * @return \Illuminate\Http\Response
     */
    public function edit(GaugePersonalSettings $gaugePersonalSettings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GaugePersonalSettings  $gaugePersonalSettings
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GaugePersonalSettings $gaugePersonalSettings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GaugePersonalSettings  $gaugePersonalSettings
     * @return \Illuminate\Http\Response
     */
    public function destroy(GaugePersonalSettings $gaugePersonalSettings)
    {
        //
    }
}
