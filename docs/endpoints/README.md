
# Endpoints

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



## Accident Causes



### 1. Accident Cause


Get accident cause by accident id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accident-cause
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id |  |  |



### 2. Create Accident Cause



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-accident-cause
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| accident_id |  |  |
| cause_id |  |  |



### 3. Delete Accident Cause



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-accident-cause
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id |  |  |



### 4. Update Accident Cause



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-accident-cause
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| cause_id |  |  |



## Affiliate



### 1. Affiliate


Returns a single AW affiliate.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/affiliate
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 2. Affiliates


Returns all AW affiliates.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/affiliates
```



### 3. Affiliates State


Query affiliates by state. Use state abbreviations: AL, AZ, AR...


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/affiliates-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| state |  |  |



### 4. Create Affiliate



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-affiliate
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| last |  |  |
| url |  |  |
| conemail |  |  |
| members |  |  |
| contact |  |  |
| abstract |  |  |
| description |  |  |
| reaches |  |  |
| volunteer |  |  |
| id |  |  |
| city |  |  |
| state |  |  |
| expiration |  |  |
| memberid |  |  |
| deleted |  |  |



### 5. Delete Affiliate



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



### 6. Update Affiliate



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-affiliate
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***



## Affiliate Reach



### 1. Affiliate Reaches


Get all reaches associated with an AW affiliate by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/affiliate-reaches
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| affiliateid |  |  |



### 2. Create Affiliate Reach



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-affiliate-reach
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| reachid |  |  |
| affiliateid |  |  |



### 3. Delete Affiliate Reach



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-affiliate-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| affiliateid |  |  |
| reachid |  |  |



## Alert



### 1. Alert



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/alert
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34161 |  |



### 2. Create Alert



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-alert
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| type |  |  |
| value |  |  |
| expiration |  |  |
| priority |  |  |



### 3. Delete Alert



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-alert
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 4. Update Alert



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-alert
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



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



## Documents



### 1. Create Document



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-document
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| documentid |  |  |
| shortname |  |  |
| abstract |  |  |
| description |  |  |
| keywords |  |  |
| recipient |  |  |
| author |  |  |
| document |  |  |
| title |  |  |



### 2. Delete Document



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-document
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| documentid |  |  |



### 3. Document



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/document
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| documentid |  |  |



### 4. Update Document



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-document
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| documentid |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| title | updated title |  |



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
| gauge_id |  |  |



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



## Injuries



### 1. Create Injury



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-injury
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| injury |  |  |



### 2. Delete Injury



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-injury
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Injuries



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/injuries
```



### 4. Update Injury



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| record_number |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |



## Layer



### 1. Create Layer



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-layer
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| topology_id |  |  |
| layer_id |  |  |
| schema_name |  |  |
| table_name |  |  |
| feature_column |  |  |
| feature_type |  |  |
| level |  |  |
| child_id |  |  |



### 2. Delete Layer



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-layer
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| layer_id |  |  |



### 3. Layer


Returns a single topology record.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/layer
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| layer_id |  |  |



### 4. Layer All


Returns all tpoplogy records.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/layer-all
```



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



## States



### 1. Create State



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-state
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |
| record_number |  |  |
| abbreviation |  |  |
| country |  |  |



### 2. Delete State



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| record_number |  |  |



### 3. States



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/states
```



### 4. Update State



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| record_number |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name |  |  |



## Topology



### 1. Create Topology



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-topology
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| name |  |  |
| srid |  |  |
| precision |  |  |
| hasz |  |  |



### 2. Delete Topology



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-topology
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Topology


Returns a single topology record.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/topology
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 4. Topology All


Returns all tpoplogy records.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/topology-all
```



### 5. Update Topology



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-topology
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body:***



## Trip Log



### 1. Create Trip Log



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-trip-log
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id | 892843 |  |
| state |  |  |
| rivername |  |  |
| reachid |  |  |
| datetaken |  |  |
| level |  |  |
| description |  |  |
| uid |  |  |
| deleted |  |  |
| observation |  |  |
| title |  |  |
| obs_time |  |  |
| reading |  |  |
| gaugeid |  |  |
| metric |  |  |
| edit_option |  |  |



### 2. Delete Trip Log



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-trip-log
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Reach Trip Logs


Get single trip log by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/trip-logs
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid |  |  |



### 4. Update Trip Log



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-trip-log
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| rivername | new name |  |



## Trip Log Photo



### 1. Create Trip Log Photo



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-trip-log-photo
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |
| caption |  |  |
| rapidname |  |  |
| thumbnail |  |  |
| ext |  |  |
| isvideo |  |  |
| filesize |  |  |
| deleted |  |  |
| triplog_id |  |  |
| author |  |  |
| subject |  |  |
| detail |  |  |
| allowhtml |  |  |
| url |  |  |



### 2. Delete Trip Log Photo



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:8000/delete-trip-log-photo
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 3. Trip Log Photo


Get single trip log by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/trip-log-photo
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 4. Update Trip Log Photo



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-trip-log-photo
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



---
[Back to top](#wh2o-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-07-13 11:05:33 by [docgen](https://github.com/thedevsaddam/docgen)
