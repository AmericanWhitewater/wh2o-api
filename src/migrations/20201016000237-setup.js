'use strict'

const { DataTypes, Sequelize } = require('sequelize')

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

let info = {
  'revision': 1,
  'name': 'initial-setup',
  'created': '2020-10-15T15:02:48.998Z',
  'comment': ''
}

let migrationCommands = [{
  fn: 'createTable',
  params: [
    'accidents',
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
  fn: 'createTable',
  params: [
    'accidents_factors',
    {

      accident_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      factor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }
  ]
},
{
  fn: 'createTable',
  params: [
    'accidents_injuries',
    {
      accident_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      injury_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'affiliates',
    {
      last: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      conemail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      members: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      contact: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      abstract: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      reaches: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      volunteer: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: false
      },
      expiration: {
        type: DataTypes.CHAR(10),
        allowNull: false,
        defaultValue: '0'
      },
      memberid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'affiliates_reaches',
    {
      affiliateid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      reachid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'awalerts',
    {
      articleid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      expiration: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      priority: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'awarticle',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'awarticles',
    {
      articleid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: true
      },
      abstract: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      abstractphoto: {
        type: DataTypes.STRING,
        allowNull: true
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      hascontents: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      contents: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      contentsphoto: {
        type: DataTypes.STRING,
        allowNull: true
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: true
      },
      posted: {
        type: DataTypes.DATE,
        allowNull: true
      },
      shortname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      releasedate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'tells if article is deleted'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'awnews',
    {
      articleid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      expiration: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      priority: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'causes',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cause: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      schema: 'public'
    }
  ]
},
{
  fn: 'createTable',
  params: [
    'comments',
    {
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        comment: 'user id that made the comment'
      },
      sectionid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        comment: 'id of object from the section'
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'name of the person that commented (depricated)'
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'comment text'
      },
      posted: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'posted date'
      },
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        /**
         * @todo https://stackoverflow.com/questions/42501904/custom-postgresql-sequence-nextval-in-sequelizejs
         */
        // defaultValue: Sequelize.fn("SELECT nextval('sequence')", {
        //     type: collection.Sequelize.QueryTypes.SELECT
        // }),
        comment: 'comment ID'
      },
      section: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'river',
        comment: 'section this applies to (river,photo,journal)'
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'comment',
        comment: 'type of comment (warning,complaint,comment)'
      },
      deleted: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Deleted timestamp'
      },
      duid: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'Deleted UID '
      },
      revision: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: 'Revision #',
        primaryKey: true,
        autoIncrement: true
      },
      is_final: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'Is this the final comment (vs. some old revision)'
      },
      is_private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'Is this a private comment?'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'contactheader',
    {
      listing: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      contactid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      sortid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      mailingexempt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      manager: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      candisplay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '1'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'contactinstance2contact',
    {
      instance: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      listing: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'contacts',
    {
      uid: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fax: {
        type: DataTypes.STRING,
        allowNull: true
      },
      contactid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '0'
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
      position: {
        type: DataTypes.STRING,
        allowNull: true
      },
      territory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country_code: {
        type: DataTypes.CHAR(2),
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'documents',
    {
      documentid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      shortname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      abstract: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      keywords: {
        type: DataTypes.STRING,
        allowNull: false
      },
      editdate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      recipient: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      author: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      document_size: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'etap_cache',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'id of trans',
        primaryKey: true,
        autoIncrement: true
      },
      parameters: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: DataTypes.JSON
      },
      method: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'method of what is running'
      },
      returncode: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'return code of processed method'
      },
      cachedate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when added'
      },
      rundate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when it ran'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'event_dates',
    {
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // defaultValue: 'nextval(event_dateseq::regclass)'
      },
      evdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      detail_description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      batchid: {
        type: DataTypes.INTEGER,
        allowNull: false
        // defaultValue: 'nextval(event_datesbidseq::regclass)'
      },
      starttime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      endtime: {
        type: DataTypes.TIME,
        allowNull: false
      },
      tz: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mincfs: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      maxcfs: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ed_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // defaultValue: 'nextval(event_dateseq::regclass)',
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'event_notify',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      eventid: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'events',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // defaultValue: 'nextval(eventseq::regclass)',
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      cat: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        defaultValue: 'NULL'
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      orgname: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      orgaddress: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      orgphone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      orgfax: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      orgemail: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      site: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL'
      },
      rivid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      expectpart: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      expectspec: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      issue: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      media: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      nowreventinfo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0'
      },
      contact_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false
      },
      html_description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      retired: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'factors',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      factor: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_dependent_headers',
    {
      sourceid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'source (see dependents)'
      },
      targetid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'see dependents'
      },
      time_adjustment: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: DataTypes.TIME
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL',
        comment: 'comment to describe this gauge relationship'
      },
      metricid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'metric to describe'
      },
      estimated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'is this gauge estimated?'
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'id number of corr.',
        primaryKey: true,
        autoIncrement: true
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'are you deleted?'
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'user id'
      },
      excluded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'should we exclude from the summary'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_dependents',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'dependent id',
        primaryKey: true,
        autoIncrement: true
      },
      min: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        comment: 'for corrolation (not virtual gauge) what is the cutoff'
      },
      max: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        comment: 'for corrolation (not virtual gauge) what is the maximum'
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'owner of the corrolation'
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'if this rule is deleted.'
      },
      perfect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'if we have hit perfection'
      },
      important: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'must read corresponding note.'
      },
      range_min: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        defaultValue: 'M0',
        comment: 'Lowest and Highest Range this covers'
      },
      range_max: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        defaultValue: 'M9',
        comment: 'Highest Range'
      },
      adjusted_reach_class: {
        type: DataTypes.ENUM('none', 'I', 'I(II)', 'I(III)', 'I(IV)', 'I(V)', 'I(V+)', 'I-II', 'I-II(III)', 'I-II(IV)', 'I-II(V)', 'I-II(V+)', 'II', 'II(III)', 'II(IV)', 'II(V)', 'II(V+)', 'I-II+(III)', 'I-II+(IV)', 'I-II+(V)', 'I-II+(V+)', 'II+', 'II+(III)', 'II+(IV)', 'II+(V)', 'II+(V+)', 'I-III', 'I-III(IV)', 'I-III(V)', 'I-III(V+)', 'II-III', 'II-III(IV)', 'II-III(V)', 'II-III(V+)', 'III', 'I-III+', 'I-III+(IV)', 'I-III+(V)', 'I-III+(V+)', 'II-III+', 'II-III+(IV)', 'II-III+(V)', 'II-III+(V+)', 'III+', 'III+(IV)', 'III+(V)', 'III+(V+)', 'I-IV', 'I-IV(V)', 'I-IV(V+)', 'II-IV', 'II-IV(V)', 'II-IV(V+)', 'III-IV', 'III-IV(V)', 'III-IV(V+)', 'IV', 'IV(V)', 'IV(V+)', 'I-IV+', 'I-IV+(V)', 'I-IV+(V+)', 'II-IV+', 'II-IV+(V)', 'II-IV+(V+)', 'III-IV+', 'III-IV+(V)', 'III-IV+(V+)', 'IV+', 'I-V', 'I-V(V+)', 'II-V', 'II-V(V+)', 'III-V', 'III-V(V+)', 'IV-V', 'IV-V(V+)', 'V', 'II-V+', 'III-V+', 'IV-V+', 'V+'),
        allowNull: true,
        comment: 'new adjusted reach class'
      },
      range_comment: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL',
        comment: 'comment for the range defined'
      },
      ghid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'header id'
      }
    },
    {}
  ]
  },
  {
    fn: 'createTable',
    params: [
      'gauge_sources',
      {
        source: {
          type: DataTypes.STRING,
          allowNull: false,
          comment: 'name of source',
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: true,
          comment: 'formal title of the source'
        },
        url: {
          type: DataTypes.STRING,
          allowNull: true,
          comment: 'URL to data source Homepage.'
        },
        update_type: {
          type: DataTypes.CHAR(1),
          allowNull: false,
          defaultValue: 'h',
          comment: 'm - manual (no programmatic updates) h - header based (uses the last_update and update frequency to serve a list of headers needing readings ) r - reading based (uses incoming readings to to populate the header table later ).'
        },
        update_frequency: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: '0',
          comment: 'on reading-based updates (r) this is the interval to update on in seconds, on header-based gauges (h) this is the interval to update gauge headers on in seconds.'
        },
        update_start_time: {
          type: DataTypes.TIME,
          allowNull: false,
          defaultValue: Sequelize.fn('NOW'),
          comment: 'when to start requesting updates on a reading-based gauge. For header based gauges, this is the time to do the update.'
        },
        data: {
          type: DataTypes.CHAR(512),
          allowNull: true,
          comment: 'Could contain meta-data about the updater'
        },
        updated: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.fn('NOW'),
          comment: DataTypes.TIME
        },
        populated: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.fn('NOW'),
          comment: 'when the header was last populated.'
        },
        disclaimer: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {}
    ]
  },
{
  fn: 'createTable',
  params: [
    'gauge_headers',
    {
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Administrative District (international states).'
      },
      source: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'look at guage_source. sample values include: usgs, tva, dflows',
        references: {
          model: {
            tableName: 'gauge_sources'
          },
          key: 'source'
        },
        unique: true
      },
      source_id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'The immutable ID that the source uses for this gauge.'
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'AW ID for the gauge.',
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'The display name for the gauge.'
      },
      huc: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Grabbed from GIS'
      },
      update_frequency: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'Update frequency specified in seconds > 0. 0 = disabled.'
      },
      county: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'fips code of count ssccc ex. 12005'
      },
      glat: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: '0',
        comment: 'gauge lat and lon, if specified will update the geometry column. '
      },
      glon: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: '0',
        comment: 'see glat'
      },
      update_start_time: {
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'this is the start time when to update the header '
      },
      header_updated: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'The time when the header was last written or replaced. Headers will periodically be replaced or retired.'
      },
      write_sequence: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'identifies the update batch that created this header. usefull for logging and batch operations.'
      },
      timezone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'GMT',
        comment: 'the timezone (from gnu\'s time library) for storing date stamps. We normalize all date stamps with this time zone after an update.'
      },
      update_user_frequency: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '1',
        comment: '# of seconds to update the gauge, 0 = ignore, and 1 = 1x/sec, etc...'
      },
      loc: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      },
      reading_updated: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when the last reading was sampled. Used to calculate header-based updates.'
      },
      data: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Normally not used, but could contain meta information about the update, or additional fields as required.'
      },
      obs_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'the last recorded time for the reading, facilitates a quick update condition (if currec > reading_rec_time then update observation time )'
      },
      obs_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'what was the last observation for this gauge.'
      },
      retired_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      update_calculated_frequency: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'using HUC, what is the calculated update frequency of this gauge. 0=off NULL is no opinion. Others might follow.'
      },
      clean_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'the last date the gauge information was cleaned.'
      },
      local_timezone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'this is the local timezone for the gauge, this is useful for display and formatting.'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_notify',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'user\'s id'
      },
      min: {
        type: DataTypes.REAL,
        allowNull: true,
        defaultValue: '0',
        comment: 'minimum to email'
      },
      metric: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'metric we are dealing with'
      },
      show: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'show on the gauge page'
      },
      gauge_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'gauge to link to'
      },
      asap: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'show the gauge as soon as it comes up'
      },
      down: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_notify_history',
    {
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'who',
        primaryKey: true
      },
      gauge_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'what',
        primaryKey: true
      },
      when: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when'
      },
      metric: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_personal_settings',
    {
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'uid of user who\'s gauge setting it is',
        primaryKey: true
      },
      starttime: {
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'min time to notify'
      },
      endtime: {
        type: DataTypes.TIME,
        allowNull: true,
        comment: 'max time to notify'
      },
      tz: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: DataTypes.TIME
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'email of person'
      },
      format: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '0=normal 1=pager'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_reading_metrics',
    {
      shortkey: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'name of the reading type.'
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Unit name (e.g. \'cfs\')'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Full name of unit "Cubic Feet Per Second"'
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      format: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'sprintf format for how this should be displayed'
      },
      sortorder: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'sort order for this column'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_reading_sources',
    {
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'source description'
      },
      shortkey: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        comment: 'source id.'
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},

{
  fn: 'createTable',
  params: [
    'gauge_updates',
    {
      gauge_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'gauge',
        primaryKey: true
      },
      metric: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'metric',
        primaryKey: true
      },
      lobs_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'last reading time'
      },
      lobs_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'last reading id'
      },
      lobs_reading: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: 'last reading'
      },
      obs_time: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'main reading time'
      },
      obs_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'main reading id'
      },
      obs_reading: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: 'main reading'
      },
      obs_data: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'if we have an observation comment'
      },
      write_sequence: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW'),
        comment: 'when this entry was updated.'
      },
      obs_ref: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      last_journal_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'last time a journal was written on the gauge.'
      },
      gd_ref: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'gauge dependent reference'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gauge_ws2ts',
    {
      write_sequence: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'writesequence start',
        primaryKey: true
      },
      write_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'the write date of the operation'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'geo_countries',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'fips country code.',
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'name of the country (english)'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'geo_hucs',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'huc8 code',
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'name of huc'
      },
      river_census: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'last count of the number of reaches found in this huc from our database (runs periodically)'
      },
      last_river_census: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'last run of river census probably run sometime in 2008 and never updated.'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'geo_regions',
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'region code',
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_aw: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'is this an aw sanctioned region or other'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'geo_states',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      gmi: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fips: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      shortkey: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fips_country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      aw_region: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'aw\'s region code.'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gis_counties',
    {
      gid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      area: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      perimeter: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      countyp020: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      county: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fips: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state_fips: {
        type: DataTypes.STRING,
        allowNull: true
      },
      square_mil: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      the_geom: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gis_hucs',
    {
      gid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      area: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      perimeter: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      ooo_: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ooo_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      huc_code: {
        type: DataTypes.STRING,
        allowNull: true
      },
      huc_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      reg: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sub: {
        type: DataTypes.STRING,
        allowNull: true
      },
      acc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cat: {
        type: DataTypes.STRING,
        allowNull: true
      },
      the_geom: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gis_states',
    {
      gid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      fips_admin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gmi_admin: {
        type: DataTypes.STRING,
        allowNull: true
      },
      admin_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fips_cntry: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gmi_cntry: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cntry_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      pop_admin: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      type_eng: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type_loc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sqkm: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sqmi: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      color_map: {
        type: DataTypes.STRING,
        allowNull: true
      },
      the_geom: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gis_timezones',
    {
      gid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tzid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      the_geom: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'gis_zips',
    {
      gid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true
      },
      po_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      area: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      sumblkpop: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      pop2000: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      the_geom: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'injuries',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      injury: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'journal',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      arttitle: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artdate: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      startpage: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      endpage: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      volume: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      issuenumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      issueyear: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      scanner_uid: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      pdfsize: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      forpublic: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrauthor',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      authorlast: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      authorfirst: {
        type: 'BYTEA',
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrbiblio',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      arttitle: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      artdate: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      startpage: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      volume: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      issuenumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      issueyear: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrgeo',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      geoloc: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrlinks',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      reachid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrpeople',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      peoplelast: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      peoplefirst: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrriver',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      theriver: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrscans',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      pdfsize: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      forpublic: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrstats',
    {
      issueyear: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      artdate: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      issuenumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      scanned_pdfs: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      total_articles: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      pages: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      offset: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrtopic',
    {
      uniqueid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      topic: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      primarytop: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'jrtopics',
    {
      artid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        primaryKey: true
      },
      topic: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
  },
  {
    fn: 'createTable',
    params: [
      'topology',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        srid: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        precision: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        hasz: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
      {}
    ]
  },
{
  fn: 'createTable',
  params: [
    'layer',
    {
      topology_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: {
            tableName: 'topology'
          },
          key: 'id'
        }
      },
      layer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      schema_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      table_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      feature_column: {
        type: DataTypes.STRING,
        allowNull: false
      },
      feature_type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      child_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'linker_gadgets',
    {
      source: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      lookup: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gadget: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mutual: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      is_list: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0',
        comment: 'is this resource associated with a single (id-based) resource or all resources regardless of id?'
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'linker_lists',
    {
      sourcecomp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sourceid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      targetcomp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      targetid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      mutual: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      expire_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'linker_sources',
    {
      source: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      target: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true
      },
      params: {
        type: DataTypes.STRING,
        allowNull: true
      },
      location: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      position: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'listing2permkey',
    {
      listing: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      perm: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'listinggroups',
    {
      lgid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      listing: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true
      },
      inviteonly: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '1'
      },
      isrecruiting: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      volunteerpageuntil: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
      },
      maxvolunteer: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      shoulddescribe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      showvolunteers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'listings',
    {
      listing: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      arealookup: {
        type: DataTypes.STRING,
        allowNull: false
      },
      public: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'member_update_stats',
    {
      update_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      num_records: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      num_current: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      size: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      num_errors: {
        type: DataTypes.BIGINT,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'members',
    {
      uname: {
        type: DataTypes.CHAR(15),
        allowNull: true,
        comment: 'user name'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'email address'
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'zip code'
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'first line of address'
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'city name'
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        comment: 'state name'
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'country code'
      },
      volunteer: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'are they willing to volunteer'
      },
      alerts: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Want web alerts?'
      },
      postal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Trade Postal Address?'
      },
      memnum: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0',
        comment: 'eTap Acct#',
        primaryKey: true
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Address 2'
      },
      home_phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Home Phone'
      },
      work_phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Work Phone'
      },
      journal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Deliver Journal?'
      },
      aw_beta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Subscribe to AW_Beta'
      },
      mbr_level: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bad_addr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'bad address flag from eTap'
      },
      bad_email: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'bad email flag from eTap'
      },
      mod_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'modified on '
      },
      record_type: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'is this a business, organizaiton or something else (3)'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'person\'s name'
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: DataTypes.DATE
      },
      mbr_relation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      annual_renew: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'annual renewal flag, prevents warning user too early'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'membership_types',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.CHAR(80),
        allowNull: false
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      month: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      summary: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      fundstomembership: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: 'amount of $$ that goes to membership, the rest is a donation'
      },
      order: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'order of presentation low to high'
      },
      fundstopremium: {
        type: DataTypes.BIGINT,
        allowNull: true,
        defaultValue: '0',
        comment: 'how much money goes to product if that is selected'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'parameter_cache',
    {
      key: {
        type: DataTypes.CHAR(10),
        allowNull: false,
        primaryKey: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'pg_ts_cfg',
    {
      ts_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      prs_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      locale: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'pg_ts_cfgmap',
    {
      ts_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      tok_alias: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      dict_name: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'pg_ts_dict',
    {
      dict_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      dict_init: {
        type: 'REGPROCEDURE',
        allowNull: true
      },
      dict_initoption: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      dict_lexize: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      dict_comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'pg_ts_parser',
    {
      prs_name: {
        type: DataTypes.TEXT,
        allowNull: false,
        primaryKey: true
      },
      prs_start: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      prs_nexttoken: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      prs_end: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      prs_headline: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      prs_lextype: {
        type: 'REGPROCEDURE',
        allowNull: false
      },
      prs_comment: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'projects',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      shortname: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      schema: 'public'
    }
  ]
},
{
  fn: 'createTable',
  params: [
    'rapids',
    {
      reachid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'reach it belongs to'
      },
      rapidid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // defaultValue: "nextval('\"public\".\"rapids_rapidid_seq\"'::text::regclass)",
        comment: 'rapid id in reach'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'name of rapid/POI'
      },
      distance: {
        type: DataTypes.REAL,
        allowNull: false,
        comment: 'how far down the river'
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'difficulty (if it is a rapid)'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'description of the rapid'
      },
      photoid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'photo '
      },
      videoid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'video'
      },
      isputin: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      istakeout: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      isaccess: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      isportage: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ishazard: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      iswaterfall: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      isplayspot: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      rlat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: '0'
      },
      rlon: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: '0'
      },
      approximate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'is this an estimated location'
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'true if deleted. '
      },
      rloc: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      },
      revision: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      is_final: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW')
      }
    },
    {
      schema: 'public'
    }
  ]
},
{
  fn: 'createTable',
  params: [
    'reaches',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      river: {
        type: DataTypes.STRING,
        allowNull: false
      },
      section: {
        type: DataTypes.STRING,
        allowNull: false
      },
      altname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      county: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      length: {
        type: DataTypes.REAL,
        allowNull: true
      },
      avggradient: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      maxgradient: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gaugeinfo: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      photoid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      permitid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      huc: {
        type: DataTypes.STRING,
        allowNull: true
      },
      plat: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      plon: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      prrn: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tlat: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      tlon: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      trrn: {
        type: DataTypes.STRING,
        allowNull: true
      },
      skid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'u',
        comment: '\'u\'=unverified, \'v\'=verified, \'d\'=deleted'
      },
      edited: {
        type: DataTypes.DATE,
        allowNull: true
      },
      is_final: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      revision: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'keeps the revision of the reach record.'
        // primaryKey: true,
        // autoIncrement: true
      },
      class: {
        type: DataTypes.ENUM('none', 'I', 'I(II)', 'I(III)', 'I(IV)', 'I(V)', 'I(V+)', 'I-II', 'I-II(III)', 'I-II(IV)', 'I-II(V)', 'I-II(V+)', 'II', 'II(III)', 'II(IV)', 'II(V)', 'II(V+)', 'I-II+(III)', 'I-II+(IV)', 'I-II+(V)', 'I-II+(V+)', 'II+', 'II+(III)', 'II+(IV)', 'II+(V)', 'II+(V+)', 'I-III', 'I-III(IV)', 'I-III(V)', 'I-III(V+)', 'II-III', 'II-III(IV)', 'II-III(V)', 'II-III(V+)', 'III', 'I-III+', 'I-III+(IV)', 'I-III+(V)', 'I-III+(V+)', 'II-III+', 'II-III+(IV)', 'II-III+(V)', 'II-III+(V+)', 'III+', 'III+(IV)', 'III+(V)', 'III+(V+)', 'I-IV', 'I-IV(V)', 'I-IV(V+)', 'II-IV', 'II-IV(V)', 'II-IV(V+)', 'III-IV', 'III-IV(V)', 'III-IV(V+)', 'IV', 'IV(V)', 'IV(V+)', 'I-IV+', 'I-IV+(V)', 'I-IV+(V+)', 'II-IV+', 'II-IV+(V)', 'II-IV+(V+)', 'III-IV+', 'III-IV+(V)', 'III-IV+(V+)', 'IV+', 'I-V', 'I-V(V+)', 'II-V', 'II-V(V+)', 'III-V', 'III-V(V+)', 'IV-V', 'IV-V(V+)', 'V', 'II-V+', 'III-V+', 'IV-V+', 'V+'),
        allowNull: false,
        comment: 'class of the river'
      },
      ploc: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      },
      tloc: {
        type: DataTypes.GEOMETRY,
        allowNull: true
      },
      was_final: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'tells us if the river was ever final. this helps us clean up the db when we need to weed this table. We\'ll keep was_finals but nuke never was_finals.'
      },
      thumboverride: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'tells if we override the medium-resolution photo on the river description.'
      },
      shuttledetails: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: DataTypes.TEXT
      },
      abstract: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'short description of the river.'
      },
      direction_default: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '0=none, 1= shuttle 2=to home'
      },
      custom_destination: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'google directions routing if you need it.'
      },
      revision_comment: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'when a new river is published this provides a short description of why'
      },
      permiturl: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'provides the url for the permit information'
      },
      permitinfo: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'provides a description of the permit process.'
      },
      image_override: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: DataTypes.JSON
      }
    },
    {
      schema: 'public'
    }
  ]
},
{
  fn: 'createTable',
  params: [
    'reaches_permits',
    {
      reachid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'id of river that allows permit',
        primaryKey: true
      },
      state: {
        type: DataTypes.CHAR(7),
        allowNull: false,
        comment: 'state to show.',
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'reaches_states',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'state a river is in'
        // unique: true ?
      },
      reach_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'reach that is in the state'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'retval',
    {
      min: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'sections',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lookup: {
        type: DataTypes.STRING,
        allowNull: false
      },
      preload: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      deleted: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'security',
    {
      domain: {
        type: DataTypes.STRING,
        allowNull: false
      },
      action: {
        type: DataTypes.STRING,
        allowNull: true
      },
      group: {
        type: DataTypes.STRING,
        allowNull: false
      },
      area: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'security_defaults',
    {
      domain: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      action: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      redirect: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '0'
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'sfboatmanufacturers',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'sfboattypes',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      boattype: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'states',
    {
      record_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.CHAR(100),
        allowNull: false
      },
      abbreviation: {
        type: DataTypes.CHAR(2),
        allowNull: false
      },
      country: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gmi_admin: {
        type: DataTypes.CHAR(7),
        allowNull: true,
        comment: 'this is the GMI key'
      },
      fips: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        comment: 'FIPS code for State'
      }
    },
    {
      schema: 'public'
    }
  ]
},

{
  fn: 'createTable',
  params: [
    'triplog',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true
      },
      rivername: {
        type: DataTypes.STRING,
        allowNull: true
      },
      reachid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      datetaken: {
        type: DataTypes.STRING,
        allowNull: true
      },
      level: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      uid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      observation: {
        type: DataTypes.REAL,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      obs_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      reading: {
        type: DataTypes.REAL,
        allowNull: true,
        comment: 'gauge based-reading'
      },
      gaugeid: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'gauge being updated.'
      },
      metric: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'gauge metric reported.'
      },
      edit_option: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'last photo count, should be updated in code by photo uploads.'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'triplog_photos',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      caption: {
        type: DataTypes.STRING,
        allowNull: true
      },
      rapidname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      thumbnail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      ext: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isvideo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      filesize: {
        type: DataTypes.STRING,
        allowNull: true
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      triplog_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      author: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'who the photo is of'
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'description of the photo'
      },
      allowhtml: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: 'description should be in html, to preserve some historical photo html.'
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'url (for example video) for externally hosted images'
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'users',
    {
      uid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: 'user id',
        primaryKey: true,
        autoIncrement: true
      },
      uname: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'user name'
      },
      upass: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'user password'
      },
      verifydate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: 'when the user\'s email address was last verified (exempt if members, otherwise should be every three months)'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'email address'
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'zip code'
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'first line of address'
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'city name'
      },
      state: {
        type: DataTypes.CHAR(2),
        allowNull: true,
        comment: 'state name'
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'country code'
      },
      lastlogin: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when they last logged in'
      },
      volunteer: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'are they willing to volunteer'
      },
      alerts: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Want web alerts?'
      },
      postal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Trade Postal Address?'
      },
      memnum: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: 'eTap Acct#'
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Address 2'
      },
      home_phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Home Phone'
      },
      work_phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Work Phone'
      },
      journal: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Deliver Journal?'
      },
      aw_beta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'PREF: Subscribe to AW_Beta'
      },
      mbr_level: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bad_addr: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'FLAG:bad address flag from eTap'
      },
      bad_email: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'FLAG:bad email flag from eTap'
      },
      mod_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'modified on '
      },
      record_type: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'is this a business, organizaiton or something else (3)'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'person\'s name'
      },
      mem_transaction: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'membership gift xaction #'
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'donation gift xaction #'
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: DataTypes.DATE
      },
      modifydate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when the record was modified'
      },
      pushdate: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'when this field was pushed.'
      },
      mbr_relation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      prefs: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      annual_renew: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: '0',
        comment: 'annual renewal flag, prevents warning user too early'
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      googleid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      socialprofile: {
        type: DataTypes.STRING,
        allowNull: true
      },
      facebookid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      epassword: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'NULL',
        comment: 'encrypted password.'
      },
      remember_token: {
        type: DataTypes.STRING,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {}
  ]
},
{
  fn: 'createTable',
  params: [
    'wh2osettings',
    {
      setting: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'setting name',
        primaryKey: true
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'value'
      },
      modified: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'when it was updated.'
      }
    },
    {}
  ]
}
]

module.exports = {
  pos: 0,
  up: function (queryInterface, Sequelize) {
    let index = this.pos
    return new Promise(function (resolve, reject) {
      function next () {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index]
          console.log('[#' + index + '] execute: ' + command.fn)
          index++
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject)
        } else {
          resolve()
        }
      }
      next()
    })
  },
  down: function (queryInterface, Sequelize) {
    let index = this.pos

    console.log('starting down...')
    return new Promise(function (resolve, reject) {
      function next () {
        if (index < migrationCommands.length) {
          index++
          queryInterface.dropTable.apply(queryInterface, {}).then(next, reject)
        } else {
          resolve()
        }
      }
      next()
    })
  },
  info: info
}
