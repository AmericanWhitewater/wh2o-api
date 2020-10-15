'use strict';

var Sequelize = require('sequelize');
var {DataTypes} = require('sequelize')

/**
 * Actions summary:
 *
 * createTable "accidents", deps: []
 * createTable "accidents_causes", deps: []
 * createTable "accidents_factors", deps: []
 * createTable "accidents_injuries", deps: []
 * createTable "affiliates", deps: []
 * createTable "affiliates_reaches", deps: []
 * createTable "awalerts", deps: []
 * createTable "awarticle", deps: []
 * createTable "awarticles", deps: []
 * createTable "awnews", deps: []
 * createTable "causes", deps: []
 * createTable "comments", deps: []
 * createTable "contactheader", deps: []
 * createTable "contactinstance2contact", deps: []
 * createTable "contacts", deps: []
 * createTable "documents", deps: []
 * createTable "etap_cache", deps: []
 * createTable "event_dates", deps: []
 * createTable "event_notify", deps: []
 * createTable "events", deps: []
 * createTable "factors", deps: []
 * createTable "gauge_dependent_headers", deps: []
 * createTable "gauge_dependents", deps: []
 * createTable "gauge_headers", deps: []
 * createTable "gauge_notify", deps: []
 * createTable "gauge_notify_history", deps: []
 * createTable "gauge_personal_settings", deps: []
 * createTable "gauge_reading_metrics", deps: []
 * createTable "gauge_reading_sources", deps: []
 * createTable "gauge_sources", deps: []
 * createTable "gauge_updates", deps: []
 * createTable "gauge_ws2ts", deps: []
 * createTable "geo_countries", deps: []
 * createTable "geo_hucs", deps: []
 * createTable "geo_regions", deps: []
 * createTable "geo_states", deps: []
 * createTable "gis_counties", deps: []
 * createTable "gis_hucs", deps: []
 * createTable "gis_states", deps: []
 * createTable "gis_timezones", deps: []
 * createTable "gis_zips", deps: []
 * createTable "injuries", deps: []
 * createTable "journal", deps: []
 * createTable "jrauthor", deps: []
 * createTable "jrbiblio", deps: []
 * createTable "jrgeo", deps: []
 * createTable "jrlinks", deps: []
 * createTable "jrpeople", deps: []
 * createTable "jrriver", deps: []
 * createTable "jrscans", deps: []
 * createTable "jrstats", deps: []
 * createTable "jrtopic", deps: []
 * createTable "jrtopics", deps: []
 * createTable "layer", deps: []
 * createTable "linker_gadgets", deps: []
 * createTable "linker_lists", deps: []
 * createTable "linker_sources", deps: []
 * createTable "listing2permkey", deps: []
 * createTable "listinggroups", deps: []
 * createTable "listings", deps: []
 * createTable "Lorem", deps: []
 * createTable "member_update_stats", deps: []
 * createTable "members", deps: []
 * createTable "membership_types", deps: []
 * createTable "parameter_cache", deps: []
 * createTable "pg_ts_cfg", deps: []
 * createTable "pg_ts_cfgmap", deps: []
 * createTable "pg_ts_dict", deps: []
 * createTable "pg_ts_parser", deps: []
 * createTable "projects", deps: []
 * createTable "rapids", deps: []
 * createTable "reaches", deps: []
 * createTable "reaches_permits", deps: []
 * createTable "reaches_states", deps: []
 * createTable "retval", deps: []
 * createTable "sections", deps: []
 * createTable "security", deps: []
 * createTable "security_defaults", deps: []
 * createTable "sfboatmanufacturers", deps: []
 * createTable "sfboattypes", deps: []
 * createTable "states", deps: []
 * createTable "topology", deps: []
 * createTable "triplog", deps: []
 * createTable "triplog_photos", deps: []
 * createTable "users", deps: []
 * createTable "wh2osettings", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial-setup",
    "created": "2020-10-15T15:02:48.998Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "accidents",
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true
                },
                accidentdate: {
                    type: DataTypes.DATEONLY,
                    allowNull: true
                },
                victimname: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                reachid: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                countryabbr: {
                    type: DataTypes.CHAR(2),
                    allowNull: true
                },
                state: {
                    type: DataTypes.CHAR(2),
                    allowNull: true
                },
                river: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                section: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                location: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                waterlevel: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                rellevel: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                difficulty: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                age: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                experience: {
                    type: DataTypes.CHAR(1),
                    allowNull: true
                },
                privcomm: {
                    type: DataTypes.CHAR(1),
                    allowNull: true
                },
                boattype: {
                    type: DataTypes.CHAR(1),
                    allowNull: true
                },
                groupinfo: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                numvictims: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                othervictimnames: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: true
                },
                type: {
                    type: DataTypes.CHAR(1),
                    allowNull: true
                },
                cause: {
                    type: DataTypes.INTEGER,
                    allowNull: true
                },
                contactname: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                contactphone: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                contactemail: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                status: {
                    type: DataTypes.STRING,
                    allowNull: true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "accidents_causes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "accidents_factors",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "accidents_injuries",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "affiliates",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "affiliates_reaches",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "awalerts",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "awarticle",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "awarticles",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "awnews",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "causes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "comments",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "contactheader",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "contactinstance2contact",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "contacts",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "documents",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "etap_cache",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "event_dates",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "event_notify",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "events",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "factors",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_dependent_headers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_dependents",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_headers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_notify",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_notify_history",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_personal_settings",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_reading_metrics",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_reading_sources",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_sources",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_updates",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gauge_ws2ts",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "geo_countries",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "geo_hucs",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "geo_regions",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "geo_states",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gis_counties",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gis_hucs",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gis_states",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gis_timezones",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "gis_zips",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "injuries",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "journal",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrauthor",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrbiblio",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrgeo",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrlinks",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrpeople",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrriver",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrscans",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrstats",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrtopic",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "jrtopics",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "layer",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "linker_gadgets",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "linker_lists",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "linker_sources",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "listing2permkey",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "listinggroups",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "listings",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Lorem",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "member_update_stats",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "members",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "membership_types",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "parameter_cache",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pg_ts_cfg",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pg_ts_cfgmap",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pg_ts_dict",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "pg_ts_parser",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "projects",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "rapids",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "reaches",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "reaches_permits",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "reaches_states",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "retval",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "sections",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "security",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "security_defaults",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "sfboatmanufacturers",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "sfboattypes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "states",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "topology",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "triplog",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "triplog_photos",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "wh2osettings",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
