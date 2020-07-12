# Endpoints

* [Accident](#accident)

  * [Accident](#1-accident)
  * [Create Accident](#2-create-accident)
  * [Delete Accident](#3-delete-accident)
  * [Update Accident](#4-update-accident)

* [Article](#article)

  * [Article](#1-article)
  * [Create Article](#2-create-article)
  * [Delete Article](#3-delete-article)
  * [Update Article](#4-update-article)

* [Comments](#comments)

  * [Comment](#1-comment)
  * [Create Comment](#2-create-comment)
  * [Delete Comment](#3-delete-comment)
  * [Reach Comments](#4-reach-comments)
  * [Reach Warnings](#5-reach-warnings)
  * [Update Comment](#6-update-comment)

* [Event](#event)

  * [Create Event](#1-create-event)
  * [Delete Event](#2-delete-event)
  * [Event](#3-event)
  * [Events By State](#4-events-by-state)
  * [Update Event](#5-update-event)

* [GIS Huc](#gis-huc)

  * [Create GIS Huc](#1-create-gis-huc)
  * [Delete GIS Huc](#2-delete-gis-huc)
  * [GIS Huc](#3-gis-huc)
  * [Update GIS Huc](#4-update-gis-huc)

* [GIS State](#gis-state)

  * [Create GIS State](#1-create-gis-state)
  * [Delete GIS State](#2-delete-gis-state)
  * [GIS State](#3-gis-state)
  * [GIS Zip Country](#4-gis-zip-country)
  * [Update GIS Zip](#5-update-gis-zip)

* [GIS Zip](#gis-zip)

  * [Create GIS Zip](#1-create-gis-zip)
  * [Delete GIS Zip](#2-delete-gis-zip)
  * [GIS Zip](#3-gis-zip)
  * [GIS Zip State](#4-gis-zip-state)
  * [Update GIS Zip](#5-update-gis-zip-1)

* [Gage Reading Metric](#gage-reading-metric)

  * [Create Gage Reading Metric](#1-create-gage-reading-metric)
  * [Delete Gage Reading Metric](#2-delete-gage-reading-metric)
  * [Gage Reading Metrics](#3-gage-reading-metrics)
  * [Update Gage Reading Metric](#4-update-gage-reading-metric)

* [Gage Source](#gage-source)

  * [Create Source](#1-create-source)
  * [Delete Gage Source](#2-delete-gage-source)
  * [Gage Sources](#3-gage-sources)
  * [Update Gage Source](#4-update-gage-source)

* [Gage Update](#gage-update)

  * [Create Gage Update](#1-create-gage-update)
  * [Delete Gage Update](#2-delete-gage-update)
  * [Gage Updates](#3-gage-updates)
  * [Update Gage Update](#4-update-gage-update)

* [Project](#project)

  * [Create Project](#1-create-project)
  * [Delete Project](#2-delete-project)
  * [Project](#3-project)
  * [Update Project](#4-update-project)

* [Rapids](#rapids)

  * [Create Rapid](#1-create-rapid)
  * [Delete Rapid](#2-delete-rapid)
  * [Reach Rapids](#3-reach-rapids)
  * [Update Rapid](#4-update-rapid)

* [Reach](#reach)

  * [Create Reach](#1-create-reach)
  * [Delete Reach](#2-delete-reach)
  * [Reach](#3-reach)
  * [Update Reach](#4-update-reach)

* [User](#user)

  * [Create User](#1-create-user)
  * [Delete User](#2-delete-user)
  * [Update User](#3-update-user)
  * [User](#4-user)


--------


## Accident



### 1. Accident


Get single accident by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accident
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 |  |



### 2. Create Accident


Create an accident report.


***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-accident
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| accidentdate |  |  |
| victimname |  |  |
| reachid |  |  |
| countryabbr |  |  |
| state |  |  |
| river |  |  |
| section |  |  |
| location |  |  |
| waterlevel |  |  |
| rellevel |  |  |
| difficulty |  |  |
| age |  |  |
| experience |  |  |
| privcomm |  |  |
| boattype |  |  |
| groupinfo |  |  |
| numvictims |  |  |
| othervictimnames |  |  |
| description |  |  |
| type |  |  |
| cause |  |  |
| contactname |  |  |
| contactphone |  |  |
| contactemail |  |  |
| status |  |  |



### 3. Delete Accident


Delete an accident report.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-accident
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



### 4. Update Accident


See Create Accident for available fields.


***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-accident
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



***Body:***



## Article



### 1. Article



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/article
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34161 |  |



### 2. Create Article



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-article
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34164 |  |
| shortname | new-test-article |  |



### 3. Delete Article



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-article
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34163 |  |



### 4. Update Article



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-article
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34163 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| title | update test title |  |



## Comments



### 1. Comment



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/comment
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1250363 |  |



### 2. Create Comment



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-comment
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| uid |  |  |
| sectionid |  |  |
| name |  |  |
| comments |  |  |
| id |  |  |
| section |  |  |
| type |  |  |
| is_final |  |  |
| is_private |  |  |
| posted |  |  |
| deleted |  |  |
| duid |  |  |
| revision |  |  |



### 3. Delete Comment



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



### 4. Reach Comments


Get all comments for a reach.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-comments
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| sectionid |  |  |



### 5. Reach Warnings


Get all comments which are categorized as warnings.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-warnings
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| sectionid |  |  |



### 6. Update Comment



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***



## Event



### 1. Create Event



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-event
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| title |  |  |
| city |  |  |
| description |  |  |
| cat |  |  |
| uid |  |  |
| state |  |  |
| url |  |  |
| orgname |  |  |
| orgaddress |  |  |
| orgphone |  |  |
| orgfax |  |  |
| orgemail |  |  |
| site |  |  |
| rivid |  |  |
| expectpart |  |  |
| expectspec |  |  |
| issue |  |  |
| media |  |  |
| nowreventinfo |  |  |
| contact_id |  |  |
| updated |  |  |
| html_description |  |  |
| retired |  |  |



### 2. Delete Event



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-event
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Event


Get a single event record by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/event
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



### 4. Events By State


Get events by state.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/event-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| state | MA |  |



### 5. Update Event



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-event
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| description | new description |  |



## GIS Huc



### 1. Create GIS Huc



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gis-huc
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| huc_name | drew |  |



### 2. Delete GIS Huc



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gis-huc
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 2159 |  |



### 3. GIS Huc



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-huc
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 2158 |  |



### 4. Update GIS Huc



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-gis-huc
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 2160 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| huc_name | updated huc name |  |



## GIS State



### 1. Create GIS State



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gis-state
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| gid | 2607 |  |



### 2. Delete GIS State



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gis-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid |  |  |



### 3. GIS State



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-states
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid |  |  |



### 4. GIS Zip Country



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-states-country
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| country |  |  |



### 5. Update GIS Zip



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-gis-zip
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| zip | 20861 |  |



## GIS Zip



### 1. Create GIS Zip



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gis-zip
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| gid |  |  |
| zip |  |  |
| po_name |  |  |
| state |  |  |
| area |  |  |
| sumblkpop |  |  |
| pop2000 |  |  |
| the_geom |  |  |



### 2. Delete GIS Zip



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gis-zip
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 30010 |  |



### 3. GIS Zip



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-zip
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 30010 |  |



### 4. GIS Zip State



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-zip-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| state |  |  |



### 5. Update GIS Zip



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-gis-zip
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 30010 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| zip | 20861 |  |



## Gage Reading Metric



### 1. Create Gage Reading Metric



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gage-reading-metric
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id | 16 |  |
| shortkey | vis |  |
| unit | visual |  |
| name | visual |  |



### 2. Delete Gage Reading Metric



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gage-reading-metric
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 16 |  |



### 3. Gage Reading Metrics


Get all available gage metrics. For example, CFS, Ft, etc.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-reading-metrics
```



### 4. Update Gage Reading Metric



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-gage-reading-metric
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 16 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | update name |  |



## Gage Source



### 1. Create Source



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gage-source
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| source | drew2 |  |



### 2. Delete Gage Source



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gage-source
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| source | drew3 |  |



### 3. Gage Sources


Get all recorded gage sources.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-sources
```



### 4. Update Gage Source



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-gage-source
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| source | drew2 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| source | drew3 |  |



## Gage Update



### 1. Create Gage Update


Create gage update record.


***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-gage-update
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| oid | 128391 |  |
| gauge_id | 251541 |  |
| metric | 2 |  |



### 2. Delete Gage Update


Remove gage update record from database.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-gage-update
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gauge_id | 251541 |  |



### 3. Gage Updates


Get updates for a single gage. 


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-updates
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gauge_id | 1 |  |



### 4. Update Gage Update


Edit an existing record.


***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-accident
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| description | new description |  |



## Project



### 1. Create Project



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-project
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |
| id |  |  |
| description |  |  |
| uid |  |  |
| shortname |  |  |



### 2. Delete Project



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-project
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 201 |  |



### 3. Project



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/project
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



### 4. Update Project



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-project
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***



## Rapids



### 1. Create Rapid



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-rapid
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| distance |  |  |
| name |  |  |
| reachid |  |  |
| difficulty |  |  |
| description |  |  |
| rapidid |  |  |
| approximate |  |  |



### 2. Delete Rapid



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



### 3. Reach Rapids


Get all rapids for a reach


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/rapids
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid | 355 |  |



### 4. Update Rapid



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-rapid
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| rapidid |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| distance |  |  |
| name |  |  |
| reachid |  |  |
| difficulty |  |  |
| description |  |  |
| approximate |  |  |



## Reach



### 1. Create Reach



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-reach
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| river |  |  |
| section |  |  |
| altname |  |  |
| county |  |  |
| zipcode |  |  |
| length |  |  |
| avggradient |  |  |
| maxgradient |  |  |
| agency |  |  |
| gaugeinfo |  |  |
| description |  |  |
| photoid |  |  |
| permitid |  |  |
| huc |  |  |
| plat |  |  |
| plon |  |  |
| prrn |  |  |
| tlat |  |  |
| tlon |  |  |
| trrn |  |  |
| skid |  |  |
| status |  |  |
| edited |  |  |
| is_final |  |  |
| revision |  |  |
| class |  |  |
| ploc |  |  |
| tloc |  |  |
| was_final |  |  |
| thumboverride |  |  |
| shuttledetails |  |  |
| abstract |  |  |
| direction_default |  |  |
| custom_destination |  |  |
| revision_comment |  |  |
| permiturl |  |  |
| permitinfo |  |  |
| image_override |  |  |



### 2. Delete Reach



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Reach


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 |  |



### 4. Update Reach


See Create Reach for available fields.


***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***



## User



### 1. Create User



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-user
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| uid |  |  |
| uname |  |  |
| upass |  |  |
| verifydate |  |  |
| email |  |  |
| zip |  |  |
| address |  |  |
| city |  |  |
| state |  |  |
| country |  |  |
| lastlogin |  |  |
| volunteer |  |  |
| alerts |  |  |
| postal |  |  |
| memnum |  |  |
| address2 |  |  |
| home_phone |  |  |
| work_phone |  |  |
| journal |  |  |
| aw_beta |  |  |
| mbr_level |  |  |
| bad_addrr |  |  |
| bad_email |  |  |
| mod_date |  |  |
| record_type |  |  |
| name |  |  |
| mem_transation |  |  |
| transaction_id |  |  |
| expiration |  |  |
| modifydate |  |  |
| pushdate |  |  |
| mbr_relation |  |  |
| prefs |  |  |
| annual_renew |  |  |
| code |  |  |
| googleid |  |  |
| socialprofile |  |  |
| facebookid |  |  |
| epassword |  |  |
| remember_token |  |  |
| created_at |  |  |
| updated_at |  |  |



### 2. Delete User



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-user
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 160557 |  |



### 3. Update User



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-user
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 160558 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| upass | update test |  |



### 4. User



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/user
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid |  |  |



***Available Variables:***

| Key | Value | Type |
| --- | ------|-------------|
| base_url | http://localhost:8000 |  |


