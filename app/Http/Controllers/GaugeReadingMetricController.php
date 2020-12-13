<?php

namespace App\Http\Controllers;

use App\GaugeReadingMetric;
use Illuminate\Http\Request;

class GaugeReadingMetricController extends Controller
{

    public static $model = GaugeReadingMetric::class;

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
     * @param  \App\GaugeReadingMetric  $gaugeReadingMetric
     * @return \Illuminate\Http\Response
     */
    public function show(GaugeReadingMetric $gaugeReadingMetric)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\GaugeReadingMetric  $gaugeReadingMetric
     * @return \Illuminate\Http\Response
     */
    public function edit(GaugeReadingMetric $gaugeReadingMetric)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\GaugeReadingMetric  $gaugeReadingMetric
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GaugeReadingMetric $gaugeReadingMetric)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\GaugeReadingMetric  $gaugeReadingMetric
     * @return \Illuminate\Http\Response
     */
    public function destroy(GaugeReadingMetric $gaugeReadingMetric)
    {
        //
    }
}
