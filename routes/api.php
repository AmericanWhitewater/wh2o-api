<?php

use Dingo\Api\Routing\Router;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
 * Welcome route - link to any public API documentation here
 */
Route::get('/', function () {
    echo 'Welcome to our API';
});

/** @var \Dingo\Api\Routing\Router $api */
$api = app('Dingo\Api\Routing\Router');
$api->version('v1', ['middleware' => ['api']], function (Router $api) {
    /*
     * Authentication
     */
    $api->group(['prefix' => 'auth'], function (Router $api) {
        $api->group(['prefix' => 'jwt'], function (Router $api) {
            $api->get('/token', 'App\Http\Controllers\Auth\AuthController@token');
        });
    });

        /*
        * Reaches
        */
        $api->group(['prefix' => 'reaches'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ReachController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ReachController@get');
            $api->post('/', 'App\Http\Controllers\ReachController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ReachController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ReachController@delete');
        });

        /*
        * Listings
        */
        $api->group(['prefix' => 'listings'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ListingController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ListingController@get');
            $api->post('/', 'App\Http\Controllers\ListingController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ListingController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ListingController@delete');
        });

        /*
        * GaugeCorrelationRanges
        */
        $api->group(['prefix' => 'gauge-correlation-ranges'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeCorrelationRangeController@getAll');
            $api->get('/{uuid}', 'App\Http\Controllers\GaugeCorrelationRangeController@get');
            $api->post('/', 'App\Http\Controllers\GaugeCorrelationRangeController@post');
            $api->patch('/{uuid}', 'App\Http\Controllers\GaugeCorrelationRangeController@patch');
            $api->delete('/{uuid}', 'App\Http\Controllers\GaugeCorrelationRangeController@delete');
        });

        /*
        * Journals
        */
        $api->group(['prefix' => 'journals'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\JournalController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\JournalController@get');
            $api->post('/', 'App\Http\Controllers\JournalController@post');
            $api->patch('/{id}', 'App\Http\Controllers\JournalController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\JournalController@delete');
        });

        /*
        * Accidents
        */
        $api->group(['prefix' => 'accidents'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\AccidentController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\AccidentController@get');
            $api->post('/', 'App\Http\Controllers\AccidentController@post');
            $api->patch('/{id}', 'App\Http\Controllers\AccidentController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\AccidentController@delete');
        });

        /*
        * Affiliates
        */
        $api->group(['prefix' => 'affiliates'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\AffiliateController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\AffiliateController@get');
            $api->post('/', 'App\Http\Controllers\AffiliateController@post');
            $api->patch('/{id}', 'App\Http\Controllers\AffiliateController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\AffiliateController@delete');
        });

        /*
        * Articles
        */
        $api->group(['prefix' => 'articles'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ArticleController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ArticleController@get');
            $api->post('/', 'App\Http\Controllers\ArticleController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ArticleController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ArticleController@delete');
        });

        /*
        * Causes
        */
        $api->group(['prefix' => 'causes'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\CauseController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\CauseController@get');
            $api->post('/', 'App\Http\Controllers\CauseController@post');
            $api->patch('/{id}', 'App\Http\Controllers\CauseController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\CauseController@delete');
        });

        /*
        * Comments
        */
        $api->group(['prefix' => 'comments'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\CommentController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\CommentController@get');
            $api->post('/', 'App\Http\Controllers\CommentController@post');
            $api->patch('/{id}', 'App\Http\Controllers\CommentController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\CommentController@delete');
        });

        /*
        * Contacts
        */
        $api->group(['prefix' => 'contacts'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ContactController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ContactController@get');
            $api->post('/', 'App\Http\Controllers\ContactController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ContactController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ContactController@delete');
        });

        /*
        * Documents
        */
        $api->group(['prefix' => 'documents'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\DocumentController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\DocumentController@get');
            $api->post('/', 'App\Http\Controllers\DocumentController@post');
            $api->patch('/{id}', 'App\Http\Controllers\DocumentController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\DocumentController@delete');
        });

        /*
        * Events
        */
        $api->group(['prefix' => 'events'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\EventController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\EventController@get');
            $api->post('/', 'App\Http\Controllers\EventController@post');
            $api->patch('/{id}', 'App\Http\Controllers\EventController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\EventController@delete');
        });

        /*
        * EventDates
        */
        $api->group(['prefix' => 'event-dates'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\EventDateController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\EventDateController@get');
            $api->post('/', 'App\Http\Controllers\EventDateController@post');
            $api->patch('/{id}', 'App\Http\Controllers\EventDateController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\EventDateController@delete');
        });

        /*
        * EventNotifies
        */
        $api->group(['prefix' => 'event-notifies'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\EventNotifyController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\EventNotifyController@get');
            $api->post('/', 'App\Http\Controllers\EventNotifyController@post');
            $api->patch('/{id}', 'App\Http\Controllers\EventNotifyController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\EventNotifyController@delete');
        });

        /*
        * Factors
        */
        $api->group(['prefix' => 'factors'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\FactorController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\FactorController@get');
            $api->post('/', 'App\Http\Controllers\FactorController@post');
            $api->patch('/{id}', 'App\Http\Controllers\FactorController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\FactorController@delete');
        });

        /*
        * Gauges
        */
        $api->group(['prefix' => 'gauges'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeController@get');
            $api->post('/', 'App\Http\Controllers\GaugeController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeController@delete');
        });

        /*
        * GaugeCorrelations
        */
        $api->group(['prefix' => 'gauge-correlations'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeCorrelationController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeCorrelationController@get');
            $api->post('/', 'App\Http\Controllers\GaugeCorrelationController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeCorrelationController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeCorrelationController@delete');
        });

        /*
        * GaugeNotifies
        */
        $api->group(['prefix' => 'gauge-notifies'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeNotifyController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeNotifyController@get');
            $api->post('/', 'App\Http\Controllers\GaugeNotifyController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeNotifyController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeNotifyController@delete');
        });

        /*
        * GaugePersonalSettings
        */
        $api->group(['prefix' => 'gauge-personal-settings'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugePersonalSettingsController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugePersonalSettingsController@get');
            $api->post('/', 'App\Http\Controllers\GaugePersonalSettingsController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugePersonalSettingsController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugePersonalSettingsController@delete');
        });

        /*
        * GaugeReadingMetrics
        */
        $api->group(['prefix' => 'gauge-reading-metrics'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeReadingMetricController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeReadingMetricController@get');
            $api->post('/', 'App\Http\Controllers\GaugeReadingMetricController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeReadingMetricController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeReadingMetricController@delete');
        });

        /*
        * GaugeSources
        */
        $api->group(['prefix' => 'gauge-sources'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeSourceController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeSourceController@get');
            $api->post('/', 'App\Http\Controllers\GaugeSourceController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeSourceController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeSourceController@delete');
        });

        /*
        * GaugeUpdates
        */
        $api->group(['prefix' => 'gauge-updates'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\GaugeUpdatesController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\GaugeUpdatesController@get');
            $api->post('/', 'App\Http\Controllers\GaugeUpdatesController@post');
            $api->patch('/{id}', 'App\Http\Controllers\GaugeUpdatesController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\GaugeUpdatesController@delete');
        });

        /*
        * Injuries
        */
        $api->group(['prefix' => 'injuries'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\InjuryController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\InjuryController@get');
            $api->post('/', 'App\Http\Controllers\InjuryController@post');
            $api->patch('/{id}', 'App\Http\Controllers\InjuryController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\InjuryController@delete');
        });

        /*
        * Links
        */
        $api->group(['prefix' => 'links'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\LinkController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\LinkController@get');
            $api->post('/', 'App\Http\Controllers\LinkController@post');
            $api->patch('/{id}', 'App\Http\Controllers\LinkController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\LinkController@delete');
        });

        /*
        * News
        */
        $api->group(['prefix' => 'news'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\NewsController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\NewsController@get');
            $api->post('/', 'App\Http\Controllers\NewsController@post');
            $api->patch('/{id}', 'App\Http\Controllers\NewsController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\NewsController@delete');
        });

        /*
        * Photos
        */
        $api->group(['prefix' => 'photos'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\PhotoController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\PhotoController@get');
            $api->post('/', 'App\Http\Controllers\PhotoController@post');
            $api->patch('/{id}', 'App\Http\Controllers\PhotoController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\PhotoController@delete');
        });

        /*
        * Rapids
        */
        $api->group(['prefix' => 'rapids'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\RapidController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\RapidController@get');
            $api->post('/', 'App\Http\Controllers\RapidController@post');
            $api->patch('/{id}', 'App\Http\Controllers\RapidController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\RapidController@delete');
        });

        /*
        * Posts
        */
        $api->group(['prefix' => 'posts'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\PostController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\PostController@get');
            $api->post('/', 'App\Http\Controllers\PostController@post');
            $api->patch('/{id}', 'App\Http\Controllers\PostController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\PostController@delete');
        });

        /*
        * Projects
        */
        $api->group(['prefix' => 'projects'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ProjectController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ProjectController@get');
            $api->post('/', 'App\Http\Controllers\ProjectController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ProjectController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ProjectController@delete');
        });

        /*
        * ReachNextEvents
        */
        $api->group(['prefix' => 'reach-next-events'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ReachNextEventController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ReachNextEventController@get');
            $api->post('/', 'App\Http\Controllers\ReachNextEventController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ReachNextEventController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ReachNextEventController@delete');
        });

        /*
        * ReachObservations
        */
        $api->group(['prefix' => 'reach-observations'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ReachObservationController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ReachObservationController@get');
            $api->post('/', 'App\Http\Controllers\ReachObservationController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ReachObservationController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ReachObservationController@delete');
        });

        /*
        * ReachReadingSummaries
        */
        $api->group(['prefix' => 'reach-reading-summaries'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ReachReadingSummaryController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ReachReadingSummaryController@get');
            $api->post('/', 'App\Http\Controllers\ReachReadingSummaryController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ReachReadingSummaryController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ReachReadingSummaryController@delete');
        });

        /*
        * ReachWarnings
        */
        $api->group(['prefix' => 'reach-warnings'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\ReachWarningController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\ReachWarningController@get');
            $api->post('/', 'App\Http\Controllers\ReachWarningController@post');
            $api->patch('/{id}', 'App\Http\Controllers\ReachWarningController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\ReachWarningController@delete');
        });

        /*
        * Regions
        */
        $api->group(['prefix' => 'regions'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\RegionController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\RegionController@get');
            $api->post('/', 'App\Http\Controllers\RegionController@post');
            $api->patch('/{id}', 'App\Http\Controllers\RegionController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\RegionController@delete');
        });

        /*
        * States
        */
        $api->group(['prefix' => 'states'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\StateController@getAll');
            $api->get('/{id}', 'App\Http\Controllers\StateController@get');
            $api->post('/', 'App\Http\Controllers\StateController@post');
            $api->patch('/{id}', 'App\Http\Controllers\StateController@patch');
            $api->delete('/{id}', 'App\Http\Controllers\StateController@delete');
        });

    /*
     * Authenticated routes
     */
    $api->group(['middleware' => ['api.auth']], function (Router $api) {
        /*
         * Authentication
         */
        $api->group(['prefix' => 'auth'], function (Router $api) {
            $api->group(['prefix' => 'jwt'], function (Router $api) {
                $api->get('/refresh', 'App\Http\Controllers\Auth\AuthController@refresh');
                $api->delete('/token', 'App\Http\Controllers\Auth\AuthController@logout');
            });

            $api->get('/me', 'App\Http\Controllers\Auth\AuthController@getUser');
        });

        /*
         * Users
         */
        $api->group(['prefix' => 'users', 'middleware' => 'check_role:admin'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\UserController@getAll');
            $api->get('/{uid}', 'App\Http\Controllers\UserController@get');
            $api->post('/', 'App\Http\Controllers\UserController@post');
            $api->put('/{uid}', 'App\Http\Controllers\UserController@put');
            $api->patch('/{uid}', 'App\Http\Controllers\UserController@patch');
            $api->delete('/{uid}', 'App\Http\Controllers\UserController@delete');
        });

        /*
         * Roles
         */
        $api->group(['prefix' => 'roles'], function (Router $api) {
            $api->get('/', 'App\Http\Controllers\RoleController@getAll');
        });

        
    });
});
