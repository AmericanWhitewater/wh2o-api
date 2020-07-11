# wh2o-api

A Node.js API for American Whitewater.

## System Requirements

- [Node.js](https://nodejs.org/en/)

## Guide 

### Installation

From the project root run: `npm install`

### Development

To start development server with nodemon run: `npm run dev`.

### Production 

`npm start`

## Endpoints

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
  * [Update Event](#4-update-event)

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


Get single reach by id


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



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-accident
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| id | 45113 |  |
| accidentdate | 2019-01-19 |  |
| victimname | john doe |  |
| reachid | 355 |  |



### 3. Delete Accident



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
| accidentdate | 2019-01-19 |  |
| victimname | john doe |  |
| reachid | 355 |  |



### 4. Update Accident



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



## Article



### 1. Article


Get single reach by id


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


Get single reach by id


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
| uid | 377 |  |
| sectionid | 356 |  |
| name | test comment |  |
| comments | Rafting outfitter for Section 4 of the Wolf. Private boaters must have a 'trespass' permit (band) which may be purchased through this outfitter. |  |
| id | 846066 |  |
| section | ggs |  |
| type | comment |  |
| is_final | true |  |
| is_private | false |  |



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


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-comments
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| sectionid | 356 |  |



### 5. Reach Warnings


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-warnings
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| sectionid | 356 |  |



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
| id | 11139 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| description | new description |  |



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
| title | new event |  |
| state | CO |  |
| updated | 2017-04-10 13:04:06 |  |



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
| id | 4161 |  |



### 3. Event


Get single reach by id


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



### 4. Update Event



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-event
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 4161 |  |



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


Get single reach by id


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
| gid | 2607 |  |



### 3. GIS State


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-states
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 1 |  |



### 4. GIS Zip Country


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-states-country
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| country | GL |  |



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
| gid | 30010 |  |



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


Get single reach by id


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


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-zip-state
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| state | AK |  |



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


Get updates for a single gage. 


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


Get updates for a single gage. 


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
| name | drew test project |  |
| id | 201 |  |
| description | drew test project descrioption!!! |  |
| uid | 0 |  |
| shortname | drewtest |  |



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


Get single reach by id


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
| id | 201 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| name | update test title |  |



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
| distance | 0.1 |  |
| name | test lorem rapid |  |
| reachid | 355 |  |
| difficulty | V |  |
| description | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. |  |
| rapidid | 106975 |  |
| approximate | false |  |



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
| rapidid | 106975 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| distance | 0.1 |  |
| name | test another blah!! |  |
| reachid | 355 |  |
| difficulty | V |  |
| description | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. |  |
| approximate | false |  |



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
| river | test river |  |
| section | test section |  |
| is_final | false |  |
| class | V |  |
| description | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. |  |



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
| id | 11139 |  |



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



***Endpoint:***

```bash
Method: PUT
Type: URLENCODED
URL: http://localhost:8000/update-reach
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 11139 |  |



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| description | new description |  |



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
| uid | 160558 |  |
| email | foo@aol.com |  |
| uname | paddlebro5 |  |



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


Get single reach by id


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/user
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 160555 |  |



***Available Variables:***

| Key | Value | Type |
| --- | ------|-------------|
| base_url | http://localhost:8000 |  |



---
[Back to top](#wh2o-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-07-11 15:24:13 by [docgen](https://github.com/thedevsaddam/docgen)
