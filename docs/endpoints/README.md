
# Endpoints

--------


## Accident



### 1. Create


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



### 2. Delete


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



### 3. Get All


Get single accident by id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accidents
```



### 4. Get By Key


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



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 |  |



##### I. Example Response: Get By Key
```js
{
    "id": 2,
    "accidentdate": "2020-10-20",
    "victimname": "Dewayne",
    "reachid": 60,
    "countryabbr": "TX",
    "state": "MA",
    "river": "et perferendis ipsa ut",
    "section": "recusandae mollitia tenetur assumenda",
    "location": null,
    "waterlevel": null,
    "rellevel": null,
    "difficulty": null,
    "age": 39,
    "experience": null,
    "privcomm": null,
    "boattype": null,
    "groupinfo": null,
    "numvictims": null,
    "othervictimnames": null,
    "description": "Quas quis cumque itaque nulla quas. Delectus quo dolores. Cum sit cupiditate aut aperiam repellat ipsum dicta odio.\n \rItaque adipisci est doloremque hic deleniti officiis beatae. Recusandae sunt possimus earum voluptatem dolores porro vitae aut autem. Vel error ipsum ipsa quidem provident. Ut omnis alias hic et laborum. Nihil magni pariatur dolor est corporis blanditiis dolor. Beatae est hic perspiciatis sunt temporibus similique.\n \rNihil in fugiat voluptatibus fuga sint. Dolor velit eos iste facilis nemo saepe assumenda corrupti. Quia reiciendis sunt saepe dolores et numquam occaecati. Est dolorem eaque. Quasi amet omnis qui ut consequatur nemo saepe atque.",
    "type": null,
    "cause": null,
    "contactname": null,
    "contactphone": null,
    "contactemail": null,
    "status": null
}
```


***Status Code:*** 200

<br>



### 5. Update


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



### 1. Create



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



### 2. Delete



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



### 3. Get By All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accident-causes
```



***More example Requests/Responses:***


##### I. Example Request: Get By All



##### I. Example Response: Get By All
```js
[
    {
        "accident_id": -2638,
        "cause_id": 11
    },
    {
        "accident_id": 24950,
        "cause_id": 15
    },
    {
        "accident_id": 3642,
        "cause_id": 14
    },
    {
        "accident_id": 3,
        "cause_id": 14
    },
    {
        "accident_id": 6,
        "cause_id": 15
    },
    {
        "accident_id": 7,
        "cause_id": 8
    },
    {
        "accident_id": 226,
        "cause_id": 3
    },
    {
        "accident_id": 12,
        "cause_id": 18
    },
    {
        "accident_id": 13,
        "cause_id": 7
    },
    {
        "accident_id": 16,
        "cause_id": 15
    },
    {
        "accident_id": 16,
        "cause_id": 87
    },
    {
        "accident_id": 17,
        "cause_id": 7
    },
    {
        "accident_id": 3923,
        "cause_id": 11
    },
    {
        "accident_id": 34147,
        "cause_id": 3
    },
    {
        "accident_id": 21,
        "cause_id": 12
    },
    {
        "accident_id": 22,
        "cause_id": 14
    },
    {
        "accident_id": 8948,
        "cause_id": 16
    },
    {
        "accident_id": 24,
        "cause_id": 14
    },
    {
        "accident_id": 26,
        "cause_id": 15
    },
    {
        "accident_id": 27,
        "cause_id": 15
    },
    {
        "accident_id": 3992,
        "cause_id": 13
    },
    {
        "accident_id": 30,
        "cause_id": 15
    },
    {
        "accident_id": 18286,
        "cause_id": 6
    },
    {
        "accident_id": 32,
        "cause_id": 4
    },
    {
        "accident_id": 3468,
        "cause_id": 10
    }
]
```


***Status Code:*** 200

<br>



### 4. Get By Key


Get accident cause by accident id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accident-causes
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id | 16 |  |



***More example Requests/Responses:***


##### I. Example Request: Accident Cause



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id | 16 |  |



##### I. Example Response: Accident Cause
```js
[
    15,
    87
]
```


***Status Code:*** 200

<br>



### 5. Update



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



## Accident Factors
Note: DB may be able to be restructured here. Use an array of factors instead of separate records.



### 1. Create



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



### 2. Delete



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



### 3. Get By Key


Get accident cause by accident id.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/accident-factors
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id | 12 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| accident_id | 12 |  |



##### I. Example Response: Get By Key
```js
[
    37
]
```


***Status Code:*** 200

<br>



### 4. Update



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



## Affiliate Reaches



### 1. Create



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



### 2. Delete



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



### 3. Get All By Key


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
| affiliateid | 98 |  |



***More example Requests/Responses:***


##### I. Example Request: Get All By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| affiliateid | 98 |  |



##### I. Example Response: Get All By Key
```js
[
    "350",
    "958",
    "1886",
    "1949",
    "1951",
    "1952",
    "1966",
    "2024",
    "2025",
    "4183"
]
```


***Status Code:*** 200

<br>



## Affiliates



### 1. By State


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



### 2. Create



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



### 3. Delete



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



### 4. Get All


Returns all AW affiliates.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/affiliates
```



***More example Requests/Responses:***


##### I. Example Request: Affiliates



##### I. Example Response: Affiliates
```js
[
    {
        "last": "Big Thompson Watershed Forum",
        "url": "http://www.btwatershed.org/",
        "conemail": "zshelley@btwatershed.org",
        "members": "0",
        "contact": "Zack Shelley",
        "abstract": "",
        "description": "",
        "reaches": "",
        "volunteer": "0",
        "id": "4008",
        "city": "Loveland",
        "state": "CO",
        "expiration": "2008-08-16",
        "memberid": "28872",
        "deleted": 1
    },
    {
        "last": "Keelhaulers Canoe Club",
        "url": "http://keelhauler.org/kh.htm",
        "conemail": "keelhauler@yahoo.com",
        "members": "300",
        "contact": "WebMeister and Membership Chair John Kobak",
        "abstract": "Paddling in OH, PA, WV, and wherever there's water!",
        "description": "<center><img src=\"http://keelhauler.org/newlogoweb.jpg\"></center><br>Centered in the Cleveland, OH, area, Keel-haulers is an active club with <a href=\"http://www.keelhauler.org/khcc/tripschedule.htm\">a full trip schedule</a>. Our 100-page yearbook contains a lot of info, including maps to local rivers and a self-consistent ranking of over a hundred international whitewater rivers. The club is open to all <a href=\"http://www.keelhauler.org/khcc/khcapp.htm\">(Print an Application)</a>; dues are $20/year.<br>\r\nThe club website has a very active <a href=\"http://www.keelhauler.org/khcc/khcads.htm\">Used Boats and Equipment</a> page and a <a href=\"http://keelhauler.org/phpBB/viewforum.php?f=2\">Message Board</a>.\r\n",
        "reaches": null,
        "volunteer": "358",
        "id": "713",
        "city": "Cleveland",
        "state": "OH",
        "expiration": "2019-05-24",
        "memberid": "706",
        "deleted": 0
    },
    {
        "last": "Warren Wilson College Paddling Club",
        "url": "",
        "conemail": "bfarthing@warren-wilson.edu",
        "members": "0",
        "contact": "Brit Farthing, 828-771-3004",
        "abstract": "",
        "description": "",
        "reaches": null,
        "volunteer": "0",
        "id": "1000004",
        "city": "Asheville",
        "state": "NC",
        "expiration": "2006-08-26",
        "memberid": "17832",
        "deleted": 1
    }    
]
```


***Status Code:*** 200

<br>



### 5. Get By Key


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



***More example Requests/Responses:***


##### I. Example Request: Affiliate



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 98 |  |



##### I. Example Response: Affiliate
```js
{
    "last": "Coastals Canoeists",
    "url": "http://coastals.org/",
    "conemail": "",
    "members": "375",
    "contact": "http://www.coastals.org/contact/contactform.php",
    "abstract": "Coastals are people who love the blueways of Virginia and beyond. Coastals are whitewater canoeists and kayakers, flat water recreational kayakers, rafters and those who paddle any other people-powered watercraft you can imagine.",
    "description": "Coastals is a family-oriented club dedicated to the enjoyment and advancement of paddlesports and consists of canoeists, kayakers and others from the southeastern U.S., but primarily from Virginia. Activities of the club include an active club volunteer-coordinated trip roster with trips for members, at all skill levels, happening nearly every weekend of the year.\r\n\r\nThe club holds quarterly meetings at various locations around Virginia featuring an evening meal, board of directors meeting, a trip on a nearby river, and a program of interest to paddlers. Coastals' website features an active forum for paddlers throughout the Commonwealth to communicate and discuss paddlesports.",
    "reaches": "",
    "volunteer": "654",
    "id": "98",
    "city": "Richmond",
    "state": "VA",
    "expiration": "2017-03-30",
    "memberid": "99",
    "deleted": 0
}
```


***Status Code:*** 200

<br>



### 6. Update



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



## Alerts



### 1. Create



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/new-alert
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34162 |  |
| type | rgnews |  |
| value | NW |  |



### 2. Delete



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



### 3. Get By Key



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



***More example Requests/Responses:***


##### I. Example Request: Alert



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34161 |  |



##### I. Example Response: Alert
```js
{
    "articleid": "34161",
    "type": "rgnews",
    "value": "NW",
    "expiration": "2019-06-30",
    "priority": "0"
}
```


***Status Code:*** 200

<br>



### 4. Update



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



## Articles



### 1. Create



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



### 2. Delete



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



### 3. Front Page News



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/front-page-news
```



***More example Requests/Responses:***


##### I. Example Request: Article



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 34161 |  |



##### I. Example Response: Article
```js
{
    "article": {
        "articleid": "34161",
        "title": "Clackamas River flow information survey",
        "author": "Thomas O'Keefe",
        "abstract": "<p>\r\n\tAs a part of Portland General Electric&rsquo;s (PGE) license for its hydroelectric project along the Clackamas River, PGE follows a Recreation Resource Management Plan that directs the Company towards recreation projects along the Clackamas. PGE is currently seeking feedback from the whitewater community on the flow resources along the Upper Clackamas River through a short 8 question online survey.</p>\r\n",
        "abstractphoto": "2",
        "icon": null,
        "hascontents": 1,
        "contents": "<div>\r\n\tAs a part of Portland General Electric&rsquo;s (PGE) license for its hydroelectric project along the Clackamas River, PGE follows a Recreation Resource Management Plan that directs the Company towards recreation projects along the Clackamas.</div>\r\n<div>\r\n\t&nbsp;</div>\r\n<div>\r\n\tPGE meets bi-annually with a local whitewater stakeholder group, the Boater Logistics User Body (BLUB), to plan, conduct and complete the whitewater boating-related activities along the Upper Clackamas River. Such activities include sponsorship of the Annual Upper Clackamas River Whitewater Festival, the development of three river boat access sites (complete), the creation of a new whitewater boating-related improvement (in discussion), and funding for the annual maintenance of USGS flow gauges (ongoing).</div>\r\n<div>\r\n\t&nbsp;</div>\r\n<div>\r\n\tAs a part of the above measures, PGE is seeking feedback from the whitewater community on the current flow resources along the Upper Clackamas River through a short 8 question online survey.</div>\r\n<div>\r\n\t<br />\r\n\tWe encourage paddlers who enjoy the Clackamas River to take this survey:</div>\r\n<div>\r\n\t&nbsp;</div>\r\n<div>\r\n\t<a href=\"https://www.surveymonkey.com/r/FKJN8S2\">https://www.surveymonkey.com/r/FKJN8S2</a></div>\r\n<div>\r\n\t&nbsp;</div>\r\n<div>\r\n\t&nbsp;</div>\r\n",
        "contentsphoto": "2",
        "contact": "580",
        "posted": "2019-01-23T00:52:00.000Z",
        "shortname": "",
        "uid": "580",
        "releasedate": "2019-01-23T00:52:00.000Z",
        "deleted": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/articles
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "articleid": "34313",
        "title": "HELP THE USFS DISCOVER The WHITEWATER RECREATION IN THEIR OWN CA BACKYARD! ",
        "author": "Theresa Simsiman",
        "abstract": "<p>The United States Forest Service (USFS) recently released Draft Revisions for their Sequoia and Sierra National Forest Land Management Plans in California. As a part of this process, National Forests are required to identify the eligibility of rivers for inclusion into the National Wild and Scenic Rivers System. Once a river is found eligible it is managed to protect the values that support their inclusion. Over the course of 5 years of engagement, American Whitewater has identified 228 river miles in the Sequoia and Sierra National Forests that we regard to have outstandingly remarkable whitewater recreational value. These whitewater miles contain unique, rare or exemplary features that should qualify these rivers for inclusion into the Eligible Wild &amp; Scenic Rivers Inventory. Yet, thus far, the USFS has only evaluated 25% of these river miles for whitewater recreation. Help the USFS discover whitewater recreation on rivers in their CA backyard by submitting personal a comment via our <a href=\"http://bit.ly/CA_NFPlanComms_AW19\" target=\"_blank\">super simple form</a>. </p>",
        "abstractphoto": "34313.jpg",
        "icon": null,
        "hascontents": 1,
        "contents": "<p>The United States Forest Service (USFS) recently released Draft Revisions for their Sequoia and Sierra National Forest Land Management Plans. As a part of this process, National Forests are required to identify the eligibility of rivers for inclusion into the National Wild and Scenic Rivers System. Once a river is found eligible it is managed to protect the values that support their inclusion. Over the course of 5 years of engagement, American Whitewater has identified 228 river miles in the Sequoia and Sierra National Forests that we regard to have outstandingly remarkable whitewater recreational value. These whitewater miles contain unique, rare or exemplary features that should qualify these rivers for inclusion into the Eligible Wild &amp; Scenic Rivers Inventory. Yet, thus far, the USFS has only evaluated 25% of these river miles for whitewater recreation. Help the USFS discover whitewater recreation on rivers in their backyard by submitting personal a comment via our <a href=\"http://bit.ly/CA_NFPlanComms_AW19\" target=\"_blank\">super simple form</a>. If you have time please personalize our comment template, and if you really want to go the extra mile and you know these incredible rivers well, please send your comments, along with photos of rivers within the Sierra and Sequoia National Forests by September 26, 2019 directly via email to r5planrevision@fs.fed.us</p><p>The good news is most of our favored whitewater resources within the Sequoia National Forest were evaluated and are included in the Wild &amp; Scenic Eligible Inventory. The teacups of Dry Meadows, the whitewater races on Brush Creek and the commercial outfitter use on the Kern below Lake Isabella were all considered outstandingly remarkable recreational values making them worthy of managing them as if they were Wild &amp; Scenic. However, a glaring shortfall of consideration for whitewater recreation occurs within the Sierra National Forest. Approximately 157 river miles were excluded from consideration for their outstanding whitewater recreational value including the Infinislide and Waterfalls of Dinkey Creek, the latter half of Devil’s Postpile on the Middle Fork San Joaquin, the boulder gardens of Chawanakee on the San Joaquin, and quality Class IV rapids on Horseshoe Bend of the San Joaquin.&nbsp;</p><p>American Whitewater believes part of sustainable recreation and proper watershed management within the Sierra &amp; Sequoia National Forest begins with identifying the recreation that actually takes place on the rivers themselves. We hope our paddling members do too by helping us to point out their favorite whitewater resources in a <a href=\"http://bit.ly/CA_NFPlanComms_AW19\" target=\"_blank\">comment</a> today! Remember comments are due by September 26, 2019. Thank you!</p><p><br></p><p>Some easy instruction on personalizing comments:</p><p>Include -</p><ul><li>A brief summary of your boating expertise</li><li>Where you are from</li><li>Identify river name, whitewater boating section &amp; GIS or Segment i.e. DInkey Creek, Ross Creek Trail to NF Kings Confluence, GIS 3.68.6 (see table below)</li><li>Comments detailing experience on the river &amp; photos that would help demonstrate the unique, rare or exemplary attraction, i.e. for Dinkey Creek – the succession of clean waterfalls and slides</li></ul><p><br></p><p><u>SIERRA NATIONAL FOREST&nbsp;WHITEWATER RIVERS EXCLUDED FROM EVALUATION</u></p><p>River – WWB Reach &amp; GIS</p><p>Bear Creek – Pacific Crest Trail to Bear Diversion Dam 3.11</p><p>Big Creek – First 3 Miles Fish Camp to SF Merced 3.20.2</p><p>Dinkey Creek – Dinkey Dome to Dinkey Campgrounds 3.68.3</p><p>Dinkey Creek – Includes Last Mile to Dinkey Campground to logging spur run 3.68.5</p><p>Dinkey Creek – Dinkey Campgrounds to logging spur road 3.68.4</p><p>Dinkey Creek– Ross Creek Trail to Confluence of NF Kings 3.68.6</p><p>Granite Creek – Strawberry Mine to Near Cassidy Trail 3.107.1</p><p>Granite Creek – Strawberry Mine to Near Cassidy Trail 3.107.2</p><p>Middle Fork San Joaquin – Devils Postpile Nat'l Monument to Mammoth Pool Reservoir Segment 4</p><p>Mono Creek – Mono Diversion to SF San Joaquin 3.166.4</p><p>Mono Creek – First Recess to Lake Edison 3.166.2</p><p>North Fork Kings – Above Whison Reservoir 3.177.2</p><p>North Fork Kings – Balch Afterbay to Confluence w/Dinkey Creek 3.177.8</p><p>North Fork Kings – Dinkey Creek to Main Kings Confluence 3.177.8</p><p>Piute Creek – Below Golden Trout Lake to Confluence with South Fork San Joaquin 3.199.2</p><p>Piute Creek – Below Golden Trout Lake to Confluence with South Fork San Joaquin 3.199.3</p><p>San Joaquin&nbsp;– Part of Devil's Postpile National Monument to Mammoth Pool 3.233.1</p><p>San Joaquin&nbsp;– Chawnankee Gorge 3.233.4</p><p>South Fork San Joaquin River – Mono Hot Springs to Middle Fork, to Mammoth Pool 3.260.2</p><p>South Fork San Joaquin River – Florence Lake to Mono Hot Springs 3.260.2</p><p>South Fork San Joaquin River – Bridge over Piute Creek to Florence Lake Segments 2,3,4</p><p>West Fork Granite Creek – Strawberry Mine to Near Cassidy Trail 3.294.2</p><p>San Joaquin – Horseshoe Bend 3.233.6</p>",
        "contentsphoto": "34313.jpg",
        "contact": "8587",
        "posted": "2019-09-11T19:33:09.000Z",
        "shortname": "SEQUOIA AND SIERRA NATIONAL FORESTS LAND MANAGEMENT PLANS (CA)",
        "uid": "7113",
        "releasedate": "2019-09-11T19:33:09.000Z",
        "deleted": 0
    },
    {
        "articleid": "34312",
        "title": "Public Comment Due for Arkansas River Sept. 20! (CO)",
        "author": "Kestrel Kunz",
        "abstract": "<p>The Bureau of Land Management (BLM) is in their final stages of revising the Resource Management Plan for the Eastern Colorado Field Office, which encompasses the Arkansas River Corridor from Leadville to Cañon City and includes Grape Creek. The Management Plan, which hasn’t been revised since 1996, sets the blueprint for how our rivers are managed and which protections they are afforded. The BLM depends on the public - folks like yourself - to speak up and tell them why these special places need protecting. Public comments are due September 20 (in just 10 days) and must be submitted online <a href=\"https://eplanning.blm.gov/epl-front-office/eplanning/comments/commentSubmission.do?commentPeriodId=76886\" target=\"_blank\">here</a>.&nbsp;</p>",
        "abstractphoto": "34312.jpg",
        "icon": null,
        "hascontents": 1,
        "contents": "<p>The Bureau of Land Management (BLM) is in their final stages of revising the Resource Management Plan for the Eastern Colorado Field Office, which encompasses the Arkansas River Corridor from Leadville to Cañon City and includes Grape Creek. The Management Plan, which hasn’t been revised since 1996, sets the blueprint for how our rivers are managed and which protections they are afforded. The BLM depends on the public - folks like yourself - to speak up and tell them why these special places need protecting. Public comments are due September 20 (in just 10 days) and must be submitted online here.&nbsp;</p><p>How does the Management Plan revision process work? The BLM has gone through 4 years of preliminary scoping, stakeholder outreach, and draft reports. Most recently, the BLM released the Draft Resource Management Plan and Environmental Impact Statement, which includes a supplemental report on the BLM’s Wild and Scenic Suitability findings. This Draft Plan, like most others, presents four different management alternatives for the public to review, including a No-Action Alternative (Alt. A), an environment-focused alternative (Alt. B), a resource-focused alternative (Alt. C), and the preferred option - a combination of Alternatives B and C (Alt. D).&nbsp;&nbsp;&nbsp;For example, each Alternative would give a different number of river segments protections under the Wild and Scenic Rivers Act. Alternative B would determine 19 different segments as Suitable for Wild and Scenic Designation, whereas Alternative C would determine zero as Suitable, and the preferred Alternative meets somewhere in between with 5 segments. The alternatives take a similar approach to other special designations, such as Areas of Environmental Concern, Special Recreation Management Areas, and restrictions on resource extraction.&nbsp;</p><p>Here are some ideas on how you can write the most useful comments to really make a difference!&nbsp;</p><p>Be sure to make your comments unique and personal. Adding a personal story or photo of you paddling on the Arkansas River or on Grape Creek can go a long way with the decision makers.&nbsp;</p><p>Thank the BLM for what they are doing RIGHT. It’s always helpful to give positive feedback first. Here are a few things that we agree with:</p><ul><li>Arkansas Segments 1, 2, 3, and 4 are determined suitable in the preferred Alternative and the BLM emphasizes working towards permanent protections for flows in the Arkansas River Corridor. This encompasses the mainstem Arkansas River from above Granite to Cañon City and would require the BLM to manage the river to protect it’s Outstandingly Remarkable Values and free-flowing condition until Congress makes a decision to officially designate the river.&nbsp;</li><li>The BLM has identified a couple Areas of Critical Environmental Concern (ACECs) that would help protect some magnificent species in the Arkansas River Corridor, including Bighorn Sheep, raptors, peregrine falcons, and Gold Medal Trout. These include the Arkansas Canyonlands ACEC and the Grape Creek ACEC and overlap with paddling opportunities.&nbsp;</li></ul><p><br></p><p>Tell the BLM how they can do BETTER. Sometimes it can feel impossible to make a difference, but know that the BLM has to read every comment and you will be heard. Here is what we will be telling the BLM:&nbsp;</p><ul><li>Although Grape Creek was considered Eligible in both the 1996 Plan and the current assessment, it was found to be not-suitable in the Draft Plan and the BLM is proposing to strip Grape Creek of all interim protections. Grape Creek offers a remote creek boating experience outside of Cañon City with incredibly scenic views and important wildlife habitat. It’s unique and without a doubt exhilarating. If you’ve paddled Grape Creek, or want the opportunity, tell the BLM to protect this special creek through Wild and Scenic Suitability.&nbsp;</li><li>The BLM should increase the restrictions on surface occupancy for oil and gas from a 328 feet to 500 feet distance from waterways in the preferred Alternative. Our rivers and creeks are precious and should not be subjected to potential catastrophic contamination from oil and gas extraction.&nbsp;</li></ul><p><br></p><p>But most importantly, just tell the BLM why you love these river segments and why they are worth protecting. The link to comment is here and please reach out to kestrel@americanwhitewater.org if you have any questions! Be sure to submit your comments before the September 20 deadline.&nbsp;&nbsp;</p><p><br></p>",
        "contentsphoto": "34312.jpg",
        "contact": "158255",
        "posted": "2019-09-10T04:33:24.000Z",
        "shortname": "",
        "uid": "158255",
        "releasedate": "2019-09-10T04:33:24.000Z",
        "deleted": 0
    }
]
```


***Status Code:*** 200

<br>



### 5. Get By Id



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/article
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 50 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Id



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 50 |  |



##### I. Example Response: Get By Id
```js
{
    "articleid": "50",
    "title": "est maxime nesciunt illo",
    "author": "Shayna",
    "abstract": "Et illo tenetur. Assumenda rem reprehenderit ex velit voluptas dolorem.",
    "abstractphoto": "http://placeimg.com/640/480/nature",
    "icon": null,
    "hascontents": null,
    "contents": "Omnis qui alias ad nihil qui. Eaque modi sed illo magni necessitatibus ut esse blanditiis dolores. Accusantium et saepe itaque sed molestiae porro tempore.\n \rRerum nihil unde id itaque sed blanditiis dolorum non non. Maiores qui dolores voluptatum minus sapiente assumenda non dolor aut. Placeat voluptas voluptatem ut.\n \rRerum laudantium ut autem. Cum qui sapiente est. Quas fuga quam ipsam qui reprehenderit id et aut accusantium. Similique porro ad quasi sint rerum aliquid. Quae ipsa quod tenetur aperiam.",
    "contentsphoto": "http://placeimg.com/640/480/nature",
    "contact": null,
    "posted": "2020-10-19T17:27:36.972Z",
    "shortname": "eaque neque laborum ad",
    "uid": "78275",
    "releasedate": "2020-10-19T17:27:36.972Z",
    "deleted": 0
}
```


***Status Code:*** 200

<br>



### 6. Update



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



## Causes



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/causes
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 3,
        "cause": "Caught in Low Head Dam Hydraulic"
    },
    {
        "id": 4,
        "cause": "Caught in a Natural Hydraulic"
    },
    {
        "id": 6,
        "cause": "Equipment Trap"
    },
    {
        "id": 7,
        "cause": "Flush Drowning"
    },
    {
        "id": 8,
        "cause": "Foot Entrapment"
    },
    {
        "id": 10,
        "cause": "Impact/Trauma"
    },
    {
        "id": 11,
        "cause": "Other"
    },
    {
        "id": 12,
        "cause": "Swim into Rock or Sieve"
    },
    {
        "id": 13,
        "cause": "Swim into Strainer"
    },
    {
        "id": 14,
        "cause": "Pinned in Boat Against Strainer"
    },
    {
        "id": 15,
        "cause": "Pinned in Boat against Rock or Sieve"
    },
    {
        "id": 16,
        "cause": "Unknown"
    },
    {
        "id": 17,
        "cause": "Vertical Pin"
    },
    {
        "id": 18,
        "cause": "Health Problem"
    },
    {
        "id": 86,
        "cause": "PFD Not Worn or Present"
    },
    {
        "id": 87,
        "cause": "PFD Fell Off"
    }
]
```


***Status Code:*** 200

<br>



## Comments



### 1. Create



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



### 2. Delete



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



### 3. Get



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/comments
```



***More example Requests/Responses:***


##### I. Example Request: Get By Id



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 |  |



##### I. Example Response: Get By Id
```js
{
    "uid": "29",
    "sectionid": "16",
    "name": "Caden",
    "comments": "Id ut non. Et magnam minus eveniet perspiciatis sed iure ratione ea porro. Aliquam voluptatem quia in iusto earum. Nobis iste exercitationem in.",
    "posted": "2020-10-20T23:10:29.200Z",
    "id": "2",
    "section": "journal",
    "type": "comment",
    "deleted": null,
    "duid": null,
    "revision": "1",
    "is_final": true,
    "is_private": false
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get - User ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 2 |  |



##### II. Example Response: Get - User ID
```js
[
    {
        "uid": "2",
        "sectionid": "97",
        "name": "Unique",
        "comments": "Dolor ipsa tenetur enim et porro blanditiis. Molestiae voluptatem quisquam. Dolorem sunt impedit aut eius maiores. Officiis et modi.",
        "posted": "2020-10-18T04:20:55.846Z",
        "id": "41",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "40",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "0",
        "name": "Malachi",
        "comments": "Aliquid qui sit. Velit non libero cumque quibusdam beatae. Dignissimos repudiandae suscipit blanditiis quia minus exercitationem qui. Delectus quos voluptates occaecati dolore at cum reprehenderit ut quia. Aperiam sunt nostrum iste. Repudiandae labore qui nostrum est blanditiis rerum.",
        "posted": "2020-10-18T04:20:55.846Z",
        "id": "81",
        "section": "river",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "80",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "21",
        "name": "Freda",
        "comments": "Commodi iure ut sed repudiandae veritatis officia neque repellendus molestias. Maxime est dicta voluptas nobis aliquid dolor. Ut est illum dolorem dolores. Non ullam optio earum commodi sit a. Fugiat impedit omnis dolor atque error quisquam sunt exercitationem.",
        "posted": "2020-10-18T04:20:55.846Z",
        "id": "88",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "87",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "80",
        "name": "Tessie",
        "comments": "Vel eaque ducimus libero ipsum placeat enim rem. Consequuntur est laborum nostrum earum corrupti doloremque iste. Quidem laborum ab commodi amet autem. Excepturi occaecati sit aut veritatis est ratione. Ullam et nesciunt molestias repellendus quia sunt.",
        "posted": "2020-10-18T04:20:55.847Z",
        "id": "145",
        "section": "journal",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "144",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "47",
        "name": "Josiane",
        "comments": "Dolores voluptas molestiae ipsa quia aut. Voluptas distinctio optio ut facere et. Est et velit occaecati. Non aut incidunt enim placeat magnam enim nobis. Est veritatis et recusandae. Excepturi voluptates ut omnis in.",
        "posted": "2020-10-18T04:20:55.847Z",
        "id": "147",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "146",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "85",
        "name": "Geovanny",
        "comments": "Dolores sit quae. Omnis rerum exercitationem perspiciatis ab est. Aliquid corporis sequi. Eum praesentium quos sit provident tenetur natus. Rerum nobis ratione eum aperiam tempore exercitationem sed ea.",
        "posted": "2020-10-18T04:20:55.849Z",
        "id": "274",
        "section": "journal",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "273",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "24",
        "name": "Justyn",
        "comments": "Ducimus ea itaque non expedita illum dolores hic et incidunt. Consequuntur error similique optio sequi temporibus quia. Sit nihil veritatis distinctio velit. Necessitatibus enim cupiditate eligendi facere impedit. Fuga numquam a.",
        "posted": "2020-10-18T04:20:55.854Z",
        "id": "605",
        "section": "journal",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "604",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "35",
        "name": "Brandi",
        "comments": "Blanditiis sed et illo mollitia quia sit. Autem cupiditate sit. Repellendus natus consequatur magni iure consequatur voluptatibus velit ipsa quia. Porro nobis necessitatibus dolorem voluptas.",
        "posted": "2020-10-18T04:20:55.857Z",
        "id": "892",
        "section": "journal",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "891",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "81",
        "name": "Jakayla",
        "comments": "Id eius temporibus qui amet nihil quasi. Tempore sit aut ipsa.",
        "posted": "2020-10-18T04:20:55.859Z",
        "id": "1017",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "1016",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "35",
        "name": "Derick",
        "comments": "Quis consectetur vel aut ipsa qui. Quas inventore ratione qui nesciunt rerum. Ipsam officia assumenda ea totam quae. Impedit soluta ea. Quia tenetur perferendis doloribus et aspernatur rem.",
        "posted": "2020-10-18T04:20:55.859Z",
        "id": "1062",
        "section": "river",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "1061",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "99",
        "name": "Mariela",
        "comments": "Repellat dolorem nihil aut esse quibusdam amet sit aut. Id nostrum quis quam. Ut molestias non quae facilis aut est officiis esse maxime. Odio fuga quos illum sunt ut non.",
        "posted": "2020-10-18T04:20:55.862Z",
        "id": "1318",
        "section": "photo",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "1317",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "16",
        "name": "Gennaro",
        "comments": "Cumque asperiores dolorem voluptas. Dolor incidunt a. Doloremque perferendis aut cupiditate quaerat dolorem.",
        "posted": "2020-10-18T04:20:55.863Z",
        "id": "1395",
        "section": "photo",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "1394",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "44",
        "name": "Mack",
        "comments": "Voluptatem quisquam ut et ipsum nesciunt natus voluptatum. Id harum adipisci at sint consequatur beatae.",
        "posted": "2020-10-18T04:20:55.865Z",
        "id": "1595",
        "section": "photo",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "1594",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "79",
        "name": "Randi",
        "comments": "Sunt quos molestiae ipsum laudantium. Provident at et magni suscipit modi aspernatur aut est inventore.",
        "posted": "2020-10-18T04:20:55.866Z",
        "id": "1609",
        "section": "river",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "1608",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "61",
        "name": "Marianna",
        "comments": "Libero maxime eius id vero. Id nihil eos nam quia. Non voluptate expedita officia et nesciunt dolorem. Iusto est vel fugiat error.",
        "posted": "2020-10-18T04:20:55.866Z",
        "id": "1698",
        "section": "river",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "1697",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "2",
        "sectionid": "15",
        "name": "Grayson",
        "comments": "Voluptatem suscipit eos doloribus rerum nihil reprehenderit. Vel sit dolor dolore consequatur aliquam neque delectus. Iste sint molestias fugiat sit maxime harum velit consequatur ipsum. Iste aut earum.",
        "posted": "2020-10-18T04:20:55.869Z",
        "id": "1891",
        "section": "river",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "1890",
        "is_final": true,
        "is_private": false
    }
]
```


***Status Code:*** 200

<br>



##### III. Example Request: Get - By Reach



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| sectionid | 4 |  |



##### III. Example Response: Get - By Reach
```js
[
    {
        "uid": "4",
        "sectionid": "4",
        "name": "Ruth",
        "comments": "Necessitatibus id et sed dignissimos voluptas inventore nobis inventore magni. Voluptate quam non vel magnam beatae nesciunt et. Enim quia voluptatibus et quo dolore perspiciatis dolor. Nihil ad ratione quia molestias sed. Sunt ullam ab nam vero culpa vitae aut a minima. Expedita suscipit deserunt aperiam commodi est reiciendis.",
        "posted": "2020-10-18T04:20:55.847Z",
        "id": "95",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "94",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "41",
        "sectionid": "4",
        "name": "Alvina",
        "comments": "Sit beatae explicabo. Facere dolor non officiis similique cumque. Dolorem laborum nemo voluptatem dicta eos ipsam et assumenda. Explicabo animi et accusantium officia id est. Labore non excepturi numquam dolor ut modi. Voluptates corporis occaecati facere rem.",
        "posted": "2020-10-18T04:20:55.849Z",
        "id": "273",
        "section": "river",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "272",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "74",
        "sectionid": "4",
        "name": "Carolina",
        "comments": "Praesentium quia voluptas quidem ut nesciunt. Facere assumenda voluptas eos soluta saepe.",
        "posted": "2020-10-18T04:20:55.853Z",
        "id": "519",
        "section": "photo",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "518",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "17",
        "sectionid": "4",
        "name": "Oswaldo",
        "comments": "Iusto esse enim nam et repellendus fugiat. Qui officiis commodi quis. Necessitatibus dicta magnam.",
        "posted": "2020-10-18T04:20:55.854Z",
        "id": "653",
        "section": "river",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "652",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "43",
        "sectionid": "4",
        "name": "Lucious",
        "comments": "Quis illum quia sed sunt ea enim ut libero. Quo exercitationem nisi enim iure pariatur voluptatem voluptatem nihil. Aut voluptates qui mollitia. Voluptatem quam non ut delectus quaerat sint. Sit fuga quo rerum. Quae dignissimos officiis placeat.",
        "posted": "2020-10-18T04:20:55.857Z",
        "id": "890",
        "section": "photo",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "889",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "58",
        "sectionid": "4",
        "name": "Jordon",
        "comments": "Veritatis eveniet voluptas et ullam accusamus sit et fuga. Mollitia eos maiores. Veritatis dolores animi omnis vel sed debitis. Delectus voluptas voluptatem impedit dolorem quisquam repellat hic. Enim iusto dolores voluptatem ipsa molestiae aut dolorum. Sunt iste soluta distinctio eos nihil.",
        "posted": "2020-10-18T04:20:55.858Z",
        "id": "930",
        "section": "journal",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "929",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "34",
        "sectionid": "4",
        "name": "Kenny",
        "comments": "Voluptatem aut facilis. Vel voluptas quasi. Voluptatibus magni assumenda. Earum sit cum voluptatum eligendi aut temporibus. Sapiente officiis saepe.",
        "posted": "2020-10-18T04:20:55.858Z",
        "id": "962",
        "section": "journal",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "961",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "10",
        "sectionid": "4",
        "name": "Lacey",
        "comments": "Ut recusandae eveniet quos. Possimus animi ut adipisci illum harum dolorum aut. Quis et nulla qui quia sed error nostrum. Quia ut sed eligendi ullam qui occaecati. Aperiam velit id ex temporibus perspiciatis laudantium dolor.",
        "posted": "2020-10-18T04:20:55.862Z",
        "id": "1282",
        "section": "river",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "1281",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "19",
        "sectionid": "4",
        "name": "Laurie",
        "comments": "Omnis sed dicta voluptate ut nihil. Explicabo et et vel minima rerum vitae. Tenetur dolorum et necessitatibus iusto architecto voluptas aspernatur corporis. Voluptate sit harum cupiditate natus iure qui quis quis quibusdam.",
        "posted": "2020-10-18T04:20:55.864Z",
        "id": "1504",
        "section": "river",
        "type": "complaint",
        "deleted": null,
        "duid": null,
        "revision": "1503",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "66",
        "sectionid": "4",
        "name": "Augustine",
        "comments": "Quasi est voluptate odio dignissimos. Aliquid minima soluta alias et aspernatur maxime quasi qui. Suscipit qui adipisci delectus adipisci optio rerum porro. Eius sed aut suscipit id animi fugiat sed velit. Voluptatem rem dolore velit tenetur occaecati. Cum velit ipsam consequuntur sapiente ea perferendis.",
        "posted": "2020-10-18T04:20:55.869Z",
        "id": "1917",
        "section": "journal",
        "type": "warning",
        "deleted": null,
        "duid": null,
        "revision": "1916",
        "is_final": true,
        "is_private": false
    },
    {
        "uid": "80",
        "sectionid": "4",
        "name": "Marcelino",
        "comments": "Et aperiam optio ut molestias quo culpa. Natus beatae porro necessitatibus omnis et animi alias.",
        "posted": "2020-10-18T04:20:55.869Z",
        "id": "1940",
        "section": "river",
        "type": "comment",
        "deleted": null,
        "duid": null,
        "revision": "1939",
        "is_final": true,
        "is_private": false
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



## Contact Header



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/contact-header
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "49",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "323",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "385",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "491",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "580",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "815",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "904",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "1165",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "1182",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "1873",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "2096",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "3949",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 1,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "4537",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "6561",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "6706",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "7049",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "7113",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "7223",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "7849",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    },
    {
        "listing": "awmb",
        "area": "",
        "title": "",
        "contactid": "7889",
        "sortid": "0",
        "mailingexempt": 0,
        "manager": 0,
        "candisplay": 1
    }
]
```


***Status Code:*** 200

<br>



## Contacts



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/contacts
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "uid": "5062",
        "type": null,
        "name": "Will Apple",
        "address": null,
        "city": "Weybridge, Vt",
        "state": "Vt",
        "zip": null,
        "email": null,
        "phone": null,
        "fax": null,
        "contactid": "5062",
        "bio": "",
        "lname": "Apple",
        "fname": "Will",
        "photo": "0",
        "company": "",
        "position": "",
        "territory": "",
        "country_code": "  "
    },
    {
        "uid": null,
        "type": null,
        "name": "",
        "address": "482 Electric Avenue",
        "city": "Big Fork",
        "state": "MT",
        "zip": "59911",
        "email": "emil@aol.net",
        "phone": "310-602-3405",
        "fax": "",
        "contactid": "140403",
        "bio": "",
        "lname": "",
        "fname": "",
        "photo": "1",
        "company": "",
        "position": "",
        "territory": "",
        "country_code": "  "
    }
]
```


***Status Code:*** 200

<br>



## Documents



### 1. Create



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



### 2. Delete



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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/documents
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
{
    "count": 880,
    "rows": [
        {
            "documentid": "3",
            "shortname": "pencil",
            "abstract": "abs",
            "description": "desc",
            "uid": "0",
            "keywords": "keys",
            "editdate": "2007-01-08T05:00:00.000Z",
            "recipient": "3258",
            "author": "426",
            "document": "24_editpencil.png",
            "deleted": 1,
            "title": "pencil",
            "document_size": null
        },
        {
            "documentid": "29",
            "shortname": "",
            "abstract": "",
            "description": "",
            "uid": "0",
            "keywords": "",
            "editdate": "2006-09-30T04:00:00.000Z",
            "recipient": "144809",
            "author": "580",
            "document": "20060930_olympic_aw_comments.doc",
            "deleted": 1,
            "title": "Olympic National Park GMP Comments",
            "document_size": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Update



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



## Event Dates



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/event-dates
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "event_id": 1,
        "evdate": "2000-04-08",
        "detail_description": null,
        "batchid": 1,
        "starttime": "00:00:00",
        "endtime": "00:00:00",
        "tz": "",
        "mincfs": null,
        "maxcfs": null,
        "deleted": 1,
        "ed_id": 1
    },
    {
        "event_id": 1,
        "evdate": "2000-04-09",
        "detail_description": null,
        "batchid": 2,
        "starttime": "00:00:00",
        "endtime": "00:00:00",
        "tz": "",
        "mincfs": null,
        "maxcfs": null,
        "deleted": 1,
        "ed_id": 2
    }
]
```


***Status Code:*** 200

<br>



## Event Notify



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/event-notify
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 7,
        "uid": 149193,
        "eventid": 2466
    },
    {
        "id": 20,
        "uid": 428,
        "eventid": 8
    }
]
```


***Status Code:*** 200

<br>



## Events



### 1. Create



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



### 2. Delete



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



### 3. Get All By State


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
| state |  |  |



***More example Requests/Responses:***


##### I. Example Request: Events By State



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| state | VT |  |



##### I. Example Response: Events By State
```js
[
    {
        "id": 655,
        "title": "Teva LiquidLifestyles Tour",
        "city": "Burlington",
        "description": "Video premier to be held at the Higher Grounds Nightclub",
        "cat": 19,
        "uid": 759,
        "state": "VT",
        "url": "",
        "orgname": "Mark Lubkowitz",
        "orgaddress": "",
        "orgphone": "(802) 434-8412",
        "orgfax": "",
        "orgemail": "",
        "site": "",
        "rivid": 0,
        "expectpart": 0,
        "expectspec": 0,
        "issue": "",
        "media": "",
        "nowreventinfo": 0,
        "contact_id": null,
        "updated": "2010-01-01T07:00:00.000Z",
        "html_description": "",
        "retired": 1
    },
    {
        "id": 2389,
        "title": "West River Releases",
        "city": "Jamaca",
        "description": "",
        "cat": 20,
        "uid": null,
        "state": "VT",
        "url": "",
        "orgname": null,
        "orgaddress": null,
        "orgphone": null,
        "orgfax": null,
        "orgemail": null,
        "site": "",
        "rivid": null,
        "expectpart": 0,
        "expectspec": 0,
        "issue": "",
        "media": "",
        "nowreventinfo": 0,
        "contact_id": 8201,
        "updated": "2007-12-10T18:03:53.000Z",
        "html_description": "",
        "retired": 1
    },
    {
        "id": 2532,
        "title": "West River Release",
        "city": "Jamaica",
        "description": "Scheduled whitewater releases from Ball Mountain Dam.",
        "cat": 20,
        "uid": null,
        "state": "VT",
        "url": "http://www.vtstateparks.com/htm/jamaicawhitewater.cfm",
        "orgname": null,
        "orgaddress": null,
        "orgphone": null,
        "orgfax": null,
        "orgemail": null,
        "site": "",
        "rivid": null,
        "expectpart": 0,
        "expectspec": 0,
        "issue": "",
        "media": "",
        "nowreventinfo": 0,
        "contact_id": 144031,
        "updated": "2012-07-13T20:07:02.000Z",
        "html_description": "",
        "retired": 0
    }
]
```


***Status Code:*** 200

<br>



### 4. Get By Key


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



***More example Requests/Responses:***


##### I. Example Request: Event



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



##### I. Example Response: Event
```js
{
    "id": 1,
    "title": "Triple Crown",
    "city": "Elizabethton",
    "description": "Race the Watauga. \r\nRodeo at Hydro\r\nRodeo at Rock Island.\r\nRodeo at the Nolichucky.",
    "cat": 8,
    "uid": 1,
    "state": "TN",
    "url": null,
    "orgname": null,
    "orgaddress": null,
    "orgphone": null,
    "orgfax": null,
    "orgemail": null,
    "site": null,
    "rivid": null,
    "expectpart": null,
    "expectspec": null,
    "issue": null,
    "media": null,
    "nowreventinfo": 0,
    "contact_id": null,
    "updated": "2010-01-01T07:00:00.000Z",
    "html_description": "",
    "retired": 1
}
```


***Status Code:*** 200

<br>



### 5. Update



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



## Factors



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/factors
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 31,
        "factor": "Cold Water"
    },
    {
        "id": 32,
        "factor": "Darkness"
    },
    {
        "id": 33,
        "factor": "Extreme Weather"
    },
    {
        "id": 34,
        "factor": "Failed Rescue"
    },
    {
        "id": 35,
        "factor": "Inadequate Equipment"
    },
    {
        "id": 36,
        "factor": "Inexperience"
    },
    {
        "id": 37,
        "factor": "Other"
    },
    {
        "id": 40,
        "factor": "Poor Group / Scene Management"
    },
    {
        "id": 41,
        "factor": "Poor Planning"
    },
    {
        "id": 42,
        "factor": "Solo Paddling"
    },
    {
        "id": 43,
        "factor": "High Water"
    },
    {
        "id": 101,
        "factor": "One Boat Trip"
    }
]
```


***Status Code:*** 200

<br>



## GIS Counties



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-counties
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "gid": 425,
        "area": 0.282,
        "perimeter": 7.51,
        "countyp020": "426",
        "state": "AK",
        "county": "Kodiak Island Borough",
        "fips": "02150",
        "state_fips": "02",
        "square_mil": 6674.556,
        "the_geom": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            -152.68756103515625,
                            58.41911697387695
                        ],
                        [
                            -152.68569946289062,
                            58.419960021972656
                        ]
                    ]
                ]
            ]
        }
    }
]
```


***Status Code:*** 200

<br>



## GIS Huc



### 1. Create



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



### 2. Delete



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



### 3. Get By Key



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



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 2158 |  |



##### I. Example Response: Get By Key
```js
{
    "gid": 2158,
    "area": 2494430000,
    "perimeter": 342748,
    "ooo_": 2159,
    "ooo_id": 964,
    "huc_code": "14060001",
    "huc_name": "Lower Green-Diamond",
    "reg": "14",
    "sub": "1406",
    "acc": "140600",
    "cat": "14060001",
    "the_geom": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [
                        -109.43720182829172,
                        40.769973078613496
                    ],
                    [
                        -109.43719117847847,
                        40.770424038695374
                    ],
                ]
            ]
        ]
    }
}
```


***Status Code:*** 200

<br>



### 4. Update



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



## GIS States



### 1. Create



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



### 2. Delete



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



### 3. Get All By Country



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-states-country
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| country | GA |  |



***More example Requests/Responses:***


##### I. Example Request: Get All By Country



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| country | GA |  |



##### I. Example Response: Get All By Country
```js
[
    {
        "gid": 1489,
        "fips_admin": "GA05",
        "gmi_admin": "GMB-WST",
        "admin_name": "Western",
        "fips_cntry": "GA",
        "gmi_cntry": "GMB",
        "cntry_name": "The Gambia",
        "pop_admin": 385039,
        "type_eng": "Division",
        "type_loc": null,
        "sqkm": 1786.77,
        "sqmi": 689.87,
        "color_map": "9",
        "the_geom": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            -15.809446334838867,
                            13.245277404785156
                        ],
                        [
                            -15.809722900390625,
                            13.159721374511719
                        ]
                    ]
                ]
            ]
        }
    }
]
```


***Status Code:*** 200

<br>



### 4. Get All By State



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



***More example Requests/Responses:***


##### I. Example Request: Get All By State



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 1 |  |



##### I. Example Response: Get All By State
```js
{
    "gid": 1,
    "fips_admin": "GL01",
    "gmi_admin": "GRL-NRD",
    "admin_name": "Nordgronland",
    "fips_cntry": "GL",
    "gmi_cntry": "GRL",
    "cntry_name": "Greenland",
    "pop_admin": 607,
    "type_eng": "Region",
    "type_loc": null,
    "sqkm": 485386.19,
    "sqmi": 187407.61,
    "color_map": "9",
    "the_geom": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [
                        -59.763893127441406,
                        75.8580322265625
                    ],
                    [
                        -59.757781982421875,
                        75.86219787597656
                    ]
                ]
            ]
        ]
    }
}
```


***Status Code:*** 200

<br>



### 5. Update



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



## GIS Timezones



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-timezones
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "gid": 1,
        "tzid": "America/Dominica",
        "the_geom": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        -61.29474258422852,
                        15.542881011962892
                    ],
                    [
                        -61.28013610839844,
                        15.534507751464844
                    ]
                ]
            ]
        }
    }
]
```


***Status Code:*** 200

<br>



## GIS Zip



### 1. Create



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



### 2. Delete



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



### 3. Get All By State



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



### 4. Get By Key



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gis-zip
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| gid |  |  |



***More example Requests/Responses:***


##### I. Example Request: GIS Zip



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| gid | 30010 |  |



##### I. Example Response: GIS Zip
```js
{
    "gid": 30010,
    "zip": "20861",
    "po_name": null,
    "state": null,
    "area": null,
    "sumblkpop": null,
    "pop2000": null,
    "the_geom": null
}
```


***Status Code:*** 200

<br>



### 5. Update



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



## Gage Dependent Headers



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-dependent-headers
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "sourceid": 44669,
        "targetid": 37471,
        "time_adjustment": 0,
        "comment": "",
        "metricid": 2,
        "estimated": false,
        "id": 2321,
        "deleted": false,
        "uid": 904,
        "excluded": false
    },
    {
        "sourceid": 44216,
        "targetid": 37470,
        "time_adjustment": 0,
        "comment": "",
        "metricid": 2,
        "estimated": false,
        "id": 2356,
        "deleted": false,
        "uid": 904,
        "excluded": false
    }
]
```


***Status Code:*** 200

<br>



## Gage Dependents



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-dependents
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 39568,
        "min": "1000.0000",
        "max": "1500.0000",
        "uid": 3101,
        "deleted": false,
        "perfect": false,
        "important": false,
        "range_min": "R0",
        "range_max": "R4",
        "adjusted_reach_class": null,
        "range_comment": "",
        "ghid": 39568
    },
    {
        "id": 668635,
        "min": "300.0000",
        "max": "499.9999",
        "uid": 3101,
        "deleted": false,
        "perfect": false,
        "important": false,
        "range_min": "R0",
        "range_max": "R4",
        "adjusted_reach_class": null,
        "range_comment": "",
        "ghid": 38858
    }
]
```


***Status Code:*** 200

<br>



## Gage Headers



### 1. Create


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



### 2. Delete


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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-headers
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "state": "USA-TNN",
        "source": "usgs",
        "source_id": "07025400",
        "id": 6997,
        "name": "NORTH FORK OBION RIVER NEAR MARTIN, TENN (CE)",
        "huc": "08010202",
        "update_frequency": 0,
        "county": "47183",
        "glat": "36.405310",
        "glon": "-88.854768",
        "update_start_time": "00:00:00",
        "header_updated": "2018-11-27T19:48:18.000Z",
        "write_sequence": 11748748,
        "timezone": "America/Chicago",
        "update_user_frequency": null,
        "loc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -88.854768,
                36.40531
            ]
        },
        "reading_updated": "2008-05-19T18:19:06.000Z",
        "data": null,
        "obs_time": "2008-05-19T18:00:00.000Z",
        "obs_id": "30052037569913",
        "retired_date": null,
        "update_calculated_frequency": 0,
        "clean_date": "2019-06-03T09:23:38.000Z",
        "local_timezone": "America/Chicago"
    },
    {
        "state": "USA-NEB",
        "source": "noaa",
        "source_id": "mldn1",
        "id": 190682,
        "name": "South Papillion Creek at Wehrspann Lake",
        "huc": "10230006",
        "update_frequency": 0,
        "county": null,
        "glat": "41.172700",
        "glon": "-96.150800",
        "update_start_time": null,
        "header_updated": "2019-08-10T02:59:06.000Z",
        "write_sequence": 12400156,
        "timezone": "GMT",
        "update_user_frequency": 1,
        "loc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -96.1508,
                41.1727
            ]
        },
        "reading_updated": null,
        "data": null,
        "obs_time": null,
        "obs_id": null,
        "retired_date": null,
        "update_calculated_frequency": 0,
        "clean_date": "2019-05-23T13:53:15.000Z",
        "local_timezone": "America/Chicago"
    }
]
```


***Status Code:*** 200

<br>



### 4. Get By Id



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-detail
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 5424 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Id



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 5424 |  |



##### I. Example Response: Get By Id
```js
{
    "state": "USA-COL",
    "source": "usgs",
    "source_id": "07087050",
    "id": 5424,
    "name": "ARKANSAS RIVER BELOW GRANITE, CO",
    "huc": "11020001",
    "update_frequency": 0,
    "county": "08015",
    "glat": "38.994994",
    "glon": "-106.220298",
    "update_start_time": "00:00:00",
    "header_updated": "2018-11-27T19:48:18.000Z",
    "write_sequence": 11748748,
    "timezone": "America/Denver",
    "update_user_frequency": null,
    "loc": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "Point",
        "coordinates": [
            -106.220298,
            38.994994
        ]
    },
    "reading_updated": "2008-05-19T19:32:01.000Z",
    "data": null,
    "obs_time": "2008-05-19T18:45:00.000Z",
    "obs_id": "23296054013641",
    "retired_date": null,
    "update_calculated_frequency": 3600,
    "clean_date": "2019-05-23T14:06:03.000Z",
    "local_timezone": "America/Denver"
}
```


***Status Code:*** 200

<br>



### 5. Update


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



## Gage Logs



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-logs
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "recorded": "2019-06-22T09:25:01.000Z",
        "id": 170781867,
        "message_type": "App\\Legacy\\Gauges\\Lib\\Events\\CNoticeTaskList",
        "message": "Task Table.",
        "source": "daemon",
        "data": "{\"task_table\":{\"notify\":{\"func\":\"notify\",\"time\":1561173962,\"source\":\"xxx\",\"next\":\"getNextRoundHour\",\"pid_time\":1561173722,\"pid\":13959},\"hads_readings\":{\"func\":\"update_one_header\",\"time\":1561173912,\"source\":\"hads\",\"next\":\"getNextUpdateForSource\",\"pid_time\":1561173672,\"pid\":13681},\"hads_headers\":{\"func\":\"populate\",\"time\":1561173901.037701,\"source\":\"hads\",\"next\":\"getNextHeaderUpdateForSource\",\"pid_time\":1561173661,\"pid\":false},\"wvcoe_readings\":{\"func\":\"update_reading\",\"time\":1561176000,\"source\":\"wvcoe\",\"next\"",
        "level": 0,
        "source_id": "",
        "write_sequence": 0
    },
    {
        "recorded": "2019-06-22T17:05:01.000Z",
        "id": 170790958,
        "message_type": "App\\Legacy\\Gauges\\Lib\\Events\\CNoticeStartOperation",
        "message": "Starting Operation",
        "source": "hads",
        "data": "{\"task\":\"populate\"}",
        "level": 0,
        "source_id": "",
        "write_sequence": 12324333
    }
]
```


***Status Code:*** 200

<br>



## Gage Map



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-map
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "source": "usgs",
        "source_id": "07025400",
        "id": 6997,
        "name": "NORTH FORK OBION RIVER NEAR MARTIN, TENN (CE)",
        "huc": "08010202",
        "update_frequency": 0,
        "county": "47183",
        "glat": "36.405310",
        "glon": "-88.854768",
        "update_start_time": "00:00:00",
        "header_updated": "2018-11-27T19:48:18.000Z",
        "timezone": "America/Chicago",
        "loc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -88.854768,
                36.40531
            ]
        },
        "data": null,
        "update_calculated_frequency": 0,
        "clean_date": "2019-06-03T09:23:38.000Z",
        "enabled": false
    },
    {
        "source": "noaa",
        "source_id": "mldn1",
        "id": 190682,
        "name": "South Papillion Creek at Wehrspann Lake",
        "huc": "10230006",
        "update_frequency": 0,
        "county": null,
        "glat": "41.172700",
        "glon": "-96.150800",
        "update_start_time": null,
        "header_updated": "2019-08-10T02:59:06.000Z",
        "timezone": "GMT",
        "loc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -96.1508,
                41.1727
            ]
        },
        "data": null,
        "update_calculated_frequency": 0,
        "clean_date": "2019-05-23T13:53:15.000Z",
        "enabled": true
    }
]
```


***Status Code:*** 200

<br>



## Gage Notify



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-notify
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 1757279,
        "uid": 11259,
        "min": 1200,
        "metric": 2,
        "show": true,
        "gauge_id": 4688,
        "asap": false,
        "down": false
    },
    {
        "id": 1757280,
        "uid": 11259,
        "min": null,
        "metric": 8,
        "show": true,
        "gauge_id": 4731,
        "asap": false,
        "down": false
    }
]
```


***Status Code:*** 200

<br>



## Gage Notify History



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-notify-history
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "uid": 149542,
        "gauge_id": 559,
        "when": "2008-12-28T18:32:00.670Z",
        "metric": 8,
        "status": true
    },
    {
        "uid": 149155,
        "gauge_id": 172,
        "when": "2008-09-15T16:19:19.851Z",
        "metric": 2,
        "status": true
    }
]
```


***Status Code:*** 200

<br>



## Gage Personal Settings



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-personal-settings
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "uid": 155479,
        "starttime": "12:00:00",
        "endtime": "16:00:00",
        "tz": null,
        "email": "doc@hotmail.com",
        "format": 0
    },
    {
        "uid": 5412,
        "starttime": "15:00:00",
        "endtime": "16:00:00",
        "tz": "America/New_York",
        "email": "tkes@shepherd.edu",
        "format": 1
    }
]
```


***Status Code:*** 200

<br>



### 2. Get By User Id



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-personal-settings
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 172 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By User Id



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 172 |  |



##### I. Example Response: Get By User Id
```js
{
    "uid": 172,
    "starttime": "01:00:00",
    "endtime": "04:00:00",
    "tz": "America/New_York",
    "email": "jrtsn@gmail.com",
    "format": 1
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Get All



##### II. Example Response: Get All
```js
[
    {
        "uid": 155479,
        "starttime": "12:00:00",
        "endtime": "16:00:00",
        "tz": null,
        "email": "doc@hotmail.com",
        "format": 0
    },
    {
        "uid": 5412,
        "starttime": "15:00:00",
        "endtime": "16:00:00",
        "tz": "America/New_York",
        "email": "tkes@shepherd.edu",
        "format": 1
    }
]
```


***Status Code:*** 200

<br>



## Gage Reading Metric



### 1. Create



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



### 2. Delete



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



### 3. Get All


Get all available gage metrics. For example, CFS, Ft, etc.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-reading-metrics
```



***More example Requests/Responses:***


##### I. Example Request: Gage Reading Metrics



##### I. Example Response: Gage Reading Metrics
```js
[
    {
        "shortkey": "corr",
        "unit": "r.c.",
        "name": "Status",
        "id": 1,
        "format": "%1.1f",
        "sortorder": 99
    },
    {
        "shortkey": "perc",
        "unit": "%",
        "name": "Percent",
        "id": 14,
        "format": "%3.1f",
        "sortorder": 30
    },
    {
        "shortkey": "mflow",
        "unit": "cm/s",
        "name": "Metric Volumentric Flow ",
        "id": 13,
        "format": "%3.1f",
        "sortorder": 40
    },
    {
        "shortkey": "mstag",
        "unit": "m",
        "name": "Meters Stage",
        "id": 12,
        "format": "%3.2f",
        "sortorder": 50
    },
    {
        "shortkey": "pc15m",
        "unit": "in/15min",
        "name": "Precip. in 15m",
        "id": 4,
        "format": "%2.2f",
        "sortorder": 80
    },
    {
        "shortkey": "pc6h",
        "unit": "in/6h",
        "name": "Precip. in 6h",
        "id": 6,
        "format": "%2.1f",
        "sortorder": 83
    },
    {
        "shortkey": "pc12h",
        "unit": "in/12h",
        "name": "Precip. in 12h",
        "id": 3,
        "format": "%2.1f",
        "sortorder": 86
    },
    {
        "shortkey": "pc24h",
        "unit": "in/24h",
        "name": "Precip. in 24h",
        "id": 5,
        "format": "%2.1f",
        "sortorder": 89
    },
    {
        "shortkey": "pccum",
        "unit": "in/yr",
        "name": "Yearly Precip.",
        "id": 7,
        "format": "%3.1f",
        "sortorder": 93
    },
    {
        "shortkey": "bflow",
        "unit": "cfs",
        "name": "Alt. Flow",
        "id": 10,
        "format": "%4.0f",
        "sortorder": 60
    },
    {
        "shortkey": "bstag",
        "unit": "ft",
        "name": "Alt. Stage in Feet",
        "id": 11,
        "format": "%3.2f",
        "sortorder": 65
    },
    {
        "shortkey": "temp",
        "unit": "? F",
        "name": "Temperature",
        "id": 9,
        "format": "%3.0f",
        "sortorder": 75
    },
    {
        "shortkey": "flow",
        "unit": "cfs",
        "name": "Flow",
        "id": 2,
        "format": "%4.0f",
        "sortorder": 10
    },
    {
        "shortkey": "in",
        "unit": "inches",
        "name": "Inches Stage",
        "id": 15,
        "format": "%4.0f",
        "sortorder": 25
    },
    {
        "shortkey": "stage",
        "unit": "ft",
        "name": "Feet Stage",
        "id": 8,
        "format": "%3.2f",
        "sortorder": 20
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



## Gage Reading Sources



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-reading-sources
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "description": "averaged",
        "shortkey": "a",
        "id": 1
    },
    {
        "description": "calculated value",
        "shortkey": "c",
        "id": 2
    },
    {
        "description": "estimated value",
        "shortkey": "e",
        "id": 3
    },
    {
        "description": "measured",
        "shortkey": "m",
        "id": 4
    },
    {
        "description": "minimal",
        "shortkey": "n",
        "id": 5
    },
    {
        "description": "observed",
        "shortkey": "o",
        "id": 6
    },
    {
        "description": "maximal",
        "shortkey": "x",
        "id": 7
    }
]
```


***Status Code:*** 200

<br>



## Gage Sources



### 1. Create



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



### 2. Delete



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



### 3. Get All


Get all recorded gage sources.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/gage-sources
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "source": "river",
        "title": "Direct River Observations and Calculations",
        "url": null,
        "update_type": "d",
        "update_frequency": 0,
        "update_start_time": "20:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "virtual",
        "title": "New Virtual Gauges",
        "url": null,
        "update_type": "d",
        "update_frequency": 0,
        "update_start_time": "20:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "virt",
        "title": "Linear Virtual",
        "url": null,
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "vrt2",
        "title": "Virtual",
        "url": null,
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "release",
        "title": "AW Supplied Release Information",
        "url": null,
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "ice",
        "title": "Ice custom gauge?",
        "url": "",
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "dflows",
        "title": "Dreamflows",
        "url": null,
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "bobs",
        "title": "Bobs custom gauge?",
        "url": "",
        "update_type": "m",
        "update_frequency": 0,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "hads",
        "title": "NOAA Gauges",
        "url": null,
        "update_type": "h",
        "update_frequency": 2592000,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": "2009-10-06T16:58:21.000Z",
        "disclaimer": null
    },
    {
        "source": "wvcoe",
        "title": "WV COE Gauges",
        "url": "http://www.lrh-wc.usace.army.mil/wc/whitewater.html",
        "update_type": "r",
        "update_frequency": 3600,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": "2009-08-24T06:54:38.000Z",
        "populated": "2016-02-11T22:00:03.000Z",
        "disclaimer": null
    },
    {
        "source": "popud",
        "title": "POPUD Gauges",
        "url": "",
        "update_type": "r",
        "update_frequency": 3600,
        "update_start_time": "18:56:46",
        "data": null,
        "updated": "2013-11-08T01:56:46.000Z",
        "populated": "2018-11-08T15:56:46.000Z",
        "disclaimer": null
    },
    {
        "source": "dream",
        "title": "DreamFlows Gauges",
        "url": "http://www.dreamflows.com/",
        "update_type": "r",
        "update_frequency": 1800,
        "update_start_time": "00:00:00",
        "data": "{\"cycle\":2}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ",
        "updated": "2008-05-06T02:00:44.000Z",
        "populated": "2019-06-20T06:00:02.000Z",
        "disclaimer": null
    },
    {
        "source": "cdec",
        "title": "CDEC Gauges",
        "url": "http://www.nws.noaa.gov",
        "update_type": "r",
        "update_frequency": 7200,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": "2008-05-06T02:01:28.000Z",
        "populated": "2019-08-12T02:00:57.000Z",
        "disclaimer": null
    },
    {
        "source": "codwr",
        "title": "CO DWR Gauges",
        "url": "http://www.dwr.state.co.us/",
        "update_type": "r",
        "update_frequency": 3600,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": "2010-09-08T07:12:35.000Z",
        "populated": "2019-09-17T09:00:09.000Z",
        "disclaimer": null
    },
    {
        "source": "tva",
        "title": "TVA Gauges",
        "url": "http://lakeinfo.tva.gov/htbin/streaminfo",
        "update_type": "r",
        "update_frequency": 3600,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": "2008-05-06T02:00:13.000Z",
        "populated": "2019-04-09T03:00:01.000Z",
        "disclaimer": null
    },
    {
        "source": "noaa",
        "title": "NOAA Gauges",
        "url": "http://water.weather.gov",
        "update_type": "r",
        "update_frequency": 1800,
        "update_start_time": "22:59:05",
        "data": null,
        "updated": "2013-12-09T05:59:05.000Z",
        "populated": "2019-09-15T09:59:09.000Z",
        "disclaimer": null
    },
    {
        "source": "wadoe",
        "title": "WA DOE Gauges",
        "url": "https://fortress.wa.gov/ecy/eap/flows/regions/state.asp",
        "update_type": "r",
        "update_frequency": 1800,
        "update_start_time": "01:29:27",
        "data": null,
        "updated": "2016-02-17T08:29:27.000Z",
        "populated": "2019-09-11T18:59:29.000Z",
        "disclaimer": null
    },
    {
        "source": "test",
        "title": "Test Gauge",
        "url": null,
        "update_type": "h",
        "update_frequency": 1000000,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": "2019-09-11T14:27:40.000Z",
        "disclaimer": null
    },
    {
        "source": "qbec",
        "title": "Quebec Gauges",
        "url": "http://www.gouv.qc.ca/",
        "update_type": "h",
        "update_frequency": 2592000,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": "2009-08-24T06:54:12.000Z",
        "populated": "2019-08-23T00:41:09.000Z",
        "disclaimer": null
    },
    {
        "source": "sce",
        "title": "SC Edison Gauges",
        "url": "http://www.sce.com",
        "update_type": "r",
        "update_frequency": 600,
        "update_start_time": "00:33:53",
        "data": "{\"uid\":58613}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
        "updated": "2013-05-06T06:33:53.000Z",
        "populated": "2019-09-17T23:03:59.000Z",
        "disclaimer": null
    },
    {
        "source": "pge",
        "title": "PG&E Supplied",
        "url": null,
        "update_type": "r",
        "update_frequency": 600,
        "update_start_time": "00:00:00",
        "data": "{\"uid\":88675}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ",
        "updated": null,
        "populated": null,
        "disclaimer": null
    },
    {
        "source": "usgs",
        "title": "USGS Gauges",
        "url": null,
        "update_type": "r",
        "update_frequency": 900,
        "update_start_time": "00:00:00",
        "data": null,
        "updated": null,
        "populated": "2019-09-17T23:00:06.000Z",
        "disclaimer": null
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



## Gage Updates



### 1. Create


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



### 2. Delete


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



### 3. Get By Key


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



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| gauge_id | 1 |  |



##### I. Example Response: Get By Key
```js
[
    {
        "gauge_id": 1,
        "metric": 8,
        "lobs_time": "2019-09-17T20:59:12.000Z",
        "lobs_id": "4491060647",
        "lobs_reading": 1.43,
        "obs_time": "2019-09-17T21:58:56.000Z",
        "obs_id": "4491061097",
        "obs_reading": 1.42,
        "obs_data": null,
        "write_sequence": 12479403,
        "updated": "2019-09-17T22:30:07.000Z",
        "obs_ref": null,
        "last_journal_date": null,
        "gd_ref": null
    },
    {
        "gauge_id": 1,
        "metric": 2,
        "lobs_time": "2019-09-17T20:59:12.000Z",
        "lobs_id": "4491060647",
        "lobs_reading": 497,
        "obs_time": "2019-09-17T21:58:56.000Z",
        "obs_id": "4491061097",
        "obs_reading": 490,
        "obs_data": null,
        "write_sequence": 12479403,
        "updated": "2019-09-17T22:30:07.000Z",
        "obs_ref": null,
        "last_journal_date": null,
        "gd_ref": null
    }
]
```


***Status Code:*** 200

<br>



### 4. Update


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



## Geo Countries



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/geo-hucs
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": "17020013",
        "name": "Upper Crab",
        "river_census": 0,
        "last_river_census": "2019-09-17T05:22:02.000Z"
    },
    {
        "id": "14060003",
        "name": "Duchesne",
        "river_census": 6,
        "last_river_census": "2019-09-17T05:22:02.000Z"
    },
    {
        "id": "030101",
        "name": "Roanoke",
        "river_census": 0,
        "last_river_census": "2019-09-17T05:22:02.000Z"
    },
    {
        "id": "0304",
        "name": "Pee Dee",
        "river_census": 0,
        "last_river_census": "2019-09-17T05:22:02.000Z"
    },
    {
        "id": "2001",
        "name": "Hawaii",
        "river_census": 0,
        "last_river_census": "2019-09-17T05:22:02.000Z"
    }
]
```


***Status Code:*** 200

<br>



## Geo Hucs



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/geo-countries
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": "PS",
        "name": "Palau"
    },
    {
        "id": "BB",
        "name": "Barbados"
    },
    {
        "id": "CB",
        "name": "Cambodia"
    },
    {
        "id": "GG",
        "name": "Georgia"
    },
    {
        "id": "MO",
        "name": "Morocco"
    }
]
```


***Status Code:*** 200

<br>



## Geo Regions



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/geo-regions
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": "NT",
        "name": "North East",
        "is_aw": true
    },
    {
        "id": "MC",
        "name": "MidAtlantic",
        "is_aw": true
    },
    {
        "id": "SE",
        "name": "South East",
        "is_aw": true
    },
    {
        "id": "MW",
        "name": "MidWest",
        "is_aw": true
    },
    {
        "id": "NW",
        "name": "North West",
        "is_aw": true
    }
]
```


***Status Code:*** 200

<br>



## Geo States



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/geo-states
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 63,
        "gmi": "THA-PHA",
        "fips": "TH41",
        "name": "Phayao",
        "shortkey": null,
        "type": "Province",
        "fips_country": "TH",
        "aw_region": null
    },
    {
        "id": 64,
        "gmi": "CHN-JNS",
        "fips": "CH04",
        "name": "Jiangsu",
        "shortkey": null,
        "type": "Province",
        "fips_country": "CH",
        "aw_region": null
    },
    {
        "id": 65,
        "gmi": "SAU-AMD",
        "fips": "SA05",
        "name": "Al Madinah",
        "shortkey": null,
        "type": "Emirate",
        "fips_country": "SA",
        "aw_region": null
    }
]
```


***Status Code:*** 200

<br>



## Injuries



### 1. Create



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



### 2. Delete



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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/injuries
```



***More example Requests/Responses:***


##### I. Example Request: Injuries



##### I. Example Response: Injuries
```js
[
    {
        "id": 0,
        "injury": "Does not Apply"
    },
    {
        "id": 51,
        "injury": "Asthma Attack"
    },
    {
        "id": 52,
        "injury": "Head Injury / Concussion"
    },
    {
        "id": 53,
        "injury": "Heart Attack / Heart Failure"
    },
    {
        "id": 54,
        "injury": "Hypothermia"
    },
    {
        "id": 55,
        "injury": "Near Drowning"
    },
    {
        "id": 56,
        "injury": "Other"
    },
    {
        "id": 57,
        "injury": "Shoulder Dislocation"
    },
    {
        "id": 58,
        "injury": "Spinal Injury"
    },
    {
        "id": 59,
        "injury": "Physical Trauma"
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



## JR Author



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/jr-author
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "artid": "1",
        "authorlast": "Gedekoh",
        "authorfirst": {
            "type": "Buffer",
            "data": [
                66,
                111,
                98
            ]
        }
    },
    {
        "artid": "3",
        "authorlast": "Meller",
        "authorfirst": {
            "type": "Buffer",
            "data": [
                32,
                68,
                101,
                98,
                98,
                105,
                101
            ]
        }
    },
    {
        "artid": "4",
        "authorlast": "Smith",
        "authorfirst": {
            "type": "Buffer",
            "data": [
                32,
                67,
                114,
                105,
                115,
                116,
                111,
                112,
                104,
                101,
                114
            ]
        }
    },
    {
        "artid": "5",
        "authorlast": "Brown-Carpenter",
        "authorfirst": {
            "type": "Buffer",
            "data": [
                32,
                74,
                101,
                110,
                110,
                105,
                102,
                101,
                114
            ]
        }
    },
    {
        "artid": "6",
        "authorlast": "Bowers",
        "authorfirst": {
            "type": "Buffer",
            "data": [
                82,
                105,
                99,
                104
            ]
        }
    }
]
```


***Status Code:*** 200

<br>



## JR Biblio



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/jr-biblio
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "artid": "1",
        "arttitle": "Even Old Dogs",
        "artdate": "2000, May-June",
        "startpage": "4",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000"
    },
    {
        "artid": "2",
        "arttitle": "Lower Yough Clarification",
        "artdate": "2000, May-June",
        "startpage": "8",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000"
    },
    {
        "artid": "3",
        "arttitle": "Please Watch Your Step",
        "artdate": "2000, May-June",
        "startpage": "8",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000"
    },
    {
        "artid": "4",
        "arttitle": "A dark and Stormy Night Remembered",
        "artdate": "2000, May-June",
        "startpage": "9",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000"
    },
    {
        "artid": "5",
        "arttitle": "A Real Riot",
        "artdate": "2000, May-June",
        "startpage": "9",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000"
    }
]
```


***Status Code:*** 200

<br>



## JR Geo



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/jr-geo
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "artid": "338",
        "geoloc": "MT"
    },
    {
        "artid": "338",
        "geoloc": "VA"
    },
    {
        "artid": "339",
        "geoloc": "WY"
    },
    {
        "artid": "340",
        "geoloc": "WY"
    },
    {
        "artid": "342",
        "geoloc": "GA"
    }
]
```


***Status Code:*** 200

<br>



## Journal



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/journal
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "artid": "1",
        "arttitle": "Even Old Dogs",
        "artdate": "May-June",
        "startpage": "4",
        "endpage": "0",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000",
        "scanner_uid": null,
        "pdfsize": "212k",
        "forpublic": 1
    },
    {
        "artid": "2",
        "arttitle": "Lower Yough Clarification",
        "artdate": "May-June",
        "startpage": "8",
        "endpage": "0",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000",
        "scanner_uid": null,
        "pdfsize": "122k",
        "forpublic": 1
    },
    {
        "artid": "3",
        "arttitle": "Please Watch Your Step",
        "artdate": "May-June",
        "startpage": "8",
        "endpage": "0",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000",
        "scanner_uid": null,
        "pdfsize": "33k",
        "forpublic": 1
    },
    {
        "artid": "4",
        "arttitle": "A dark and Stormy Night Remembered",
        "artdate": "May-June",
        "startpage": "9",
        "endpage": "0",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000",
        "scanner_uid": null,
        "pdfsize": "33k",
        "forpublic": 1
    },
    {
        "artid": "5",
        "arttitle": "A Real Riot",
        "artdate": "May-June",
        "startpage": "9",
        "endpage": "0",
        "volume": "40",
        "issuenumber": "3",
        "issueyear": "2000",
        "scanner_uid": null,
        "pdfsize": "122k",
        "forpublic": 1
    }
]
```


***Status Code:*** 200

<br>



## Journal Reach



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/journal-reach
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": null,
        "reachname": null,
        "journalid": 1002,
        "state": "WV",
        "rivername": "Gauley",
        "reachid": 0,
        "datetaken": "",
        "level": "",
        "description": "[URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> \n[URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> \n[URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/www-calcio-napoli-it] www calcio napoli it [/URL]   <a href='http://www.8driver95.info/www-calcio-napoli-it'> www calcio napoli it </a> [URL=http://www.8driver95.info/www-lolita-com] www lolita com [/URL]   <a href='http://www.8driver95.info/www-lolita-com'> www lolita com </a> [URL=http://www.8driver95.info/www-diddl-it] www diddl it [/URL]   <a href='http://www.8driver95.info/www-diddl-it'> www diddl it </a> [URL=http://www.8driver95.info/naturismo] naturismo [/URL]   <a href='http://www.8driver95.info/naturismo'> naturismo </a> [URL=http://www.8driver95.info/pressione] pressione [/URL]   <a href='http://www.8driver95.info/pressione'> pressione </a> [URL=http://www.8driver95.info/annunci69] annunci69 [/URL]   <a href='http://www.8driver95.info/annunci69'> annunci69 </a> [URL=http://www.8driver95.info/easyjet] easyjet [/URL]   <a href='http://www.8driver95.info/easyjet'> easyjet </a> [URL=http://www.8driver95.info/calze] calze [/URL]   <a href='http://www.8driver95.info/calze'> calze </a> [URL=http://www.8driver95.info/spagnolo] spagnolo [/URL]   <a href='http://www.8driver95.info/spagnolo'> spagnolo </a> [URL=http://www.8driver95.info/american] american [/URL]   <a href='http://www.8driver95.info/american'> american </a> [URL=http://www.8driver95.info/ww-libero-it] ww libero it [/URL]   <a href='http://www.8driver95.info/ww-libero-it'> ww libero it </a> [URL=http://www.8driver95.info/fighe] fighe [/URL]   <a href='http://www.8driver95.info/fighe'> fighe </a> [URL=http://www.8driver95.info/foto-cazzo] foto cazzo [/URL]   <a href='http://www.8driver95.info/foto-cazzo'> foto cazzo </a> [URL=http://www.8driver95.info/sesso-gratuito] sesso gratuito [/URL]   <a href='http://www.8driver95.info/sesso-gratuito'> sesso gratuito </a> [URL=http://www.8driver95.info/matrimonio] matrimonio [/URL]   <a href='http://www.8driver95.info/matrimonio'> matrimonio </a> [URL=http://www.8driver95.info/nudi] nudi [/URL]   <a href='http://www.8driver95.info/nudi'> nudi </a> [URL=http://www.8driver95.info/freebar-it] freebar it [/URL]   <a href='http://www.8driver95.info/freebar-it'> freebar it </a> [URL=http://www.8driver95.info/www-riccardo-scamarcio-it] www riccardo scamarcio it [/URL]   <a href='http://www.8driver95.info/www-riccardo-scamarcio-it'> www riccardo scamarcio it </a> [URL=http://www.8driver95.info/c18-porno] c18 porno [/URL]   <a href='http://www.8driver95.info/c18-porno'> c18 porno </a> [URL=http://www.8driver95.info/lavorare] lavorare [/URL]   <a href='http://www.8driver95.info/lavorare'> lavorare </a> [URL=http://www.8driver95.info/photo-shop] photo shop [/URL]   <a href='http://www.8driver95.info/photo-shop'> photo shop </a> [URL=http://www.8driver95.info/maya-gold] maya gold [/URL]   <a href='http://www.8driver95.info/maya-gold'> maya gold </a> [URL=http://www.8driver95.info/game-pc] game pc [/URL]   <a href='http://www.8driver95.info/game-pc'> game pc </a> [URL=http://www.8driver95.info/latina] latina [/URL]   <a href='http://www.8driver95.info/latina'> latina </a> [URL=http://www.8driver95.info/arabe] arabe [/URL]   <a href='http://www.8driver95.info/arabe'> arabe </a> \n\n\n\n\nIts not much.  But with a drought, its the best thing going.  \n\n\n\nMimi Hayman (now Demaree) and Carrie Ashton playing in a rope swing near the Peters Creek takeout for the old Upper Gauley.  ",
        "uid": 0,
        "observation": -2,
        "title": "Mimi and Carrie at Peters Creek",
        "obs_time": null,
        "reading": null,
        "gaugeid": null,
        "metric": null,
        "updated": null
    }
]
```


***Status Code:*** 200

<br>



## Layer



### 1. Create



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



### 2. Delete



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



### 3. Get All


Returns all tpoplogy records.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/layer-all
```



### 4. Get By Key


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



## Linker Lists



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/linker-lists
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "sourcecomp": "river",
        "sourceid": "3",
        "targetcomp": "project",
        "targetid": "2",
        "id": "4",
        "mutual": 1,
        "expire_date": "2100-01-01"
    },
    {
        "sourcecomp": "event",
        "sourceid": "2748",
        "targetcomp": "article",
        "targetid": "10146",
        "id": "434",
        "mutual": 1,
        "expire_date": "2100-01-01"
    },
    {
        "sourcecomp": "event",
        "sourceid": "2748",
        "targetcomp": "article",
        "targetid": "10152",
        "id": "433",
        "mutual": 1,
        "expire_date": "2100-01-01"
    },
    {
        "sourcecomp": "event",
        "sourceid": "2748",
        "targetcomp": "article",
        "targetid": "10157",
        "id": "432",
        "mutual": 1,
        "expire_date": "2100-01-01"
    },
    {
        "sourcecomp": "article",
        "sourceid": "pgeflows",
        "targetcomp": "gauge",
        "targetid": "49423",
        "id": "11414",
        "mutual": 1,
        "expire_date": "2050-09-01"
    }
]
```


***Status Code:*** 200

<br>



## Linker Sources



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/linker-sources
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "source": "user",
        "target": "gauge",
        "state": "list-favorites",
        "params": "{\"uid\":\"$id\"}",
        "location": "3",
        "position": "0"
    },
    {
        "source": "user",
        "target": "event",
        "state": "list-favorites",
        "params": "{\"uid\":\"$id\"}",
        "location": "3",
        "position": "0"
    },
    {
        "source": "membermsgg",
        "target": "river",
        "state": "list",
        "params": "",
        "location": "3",
        "position": "1"
    },
    {
        "source": "nonmembermsgg",
        "target": "river",
        "state": "list",
        "params": "",
        "location": "3",
        "position": "1"
    }
]
```


***Status Code:*** 200

<br>



## Listing Groups



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/listing-groups
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "lgid": "6",
        "listing": "rsk",
        "area": "",
        "inviteonly": 0,
        "isrecruiting": 0,
        "description": "General Listing for Regional StreamTeam",
        "volunteerpageuntil": null,
        "title": "Regional StreamTeam",
        "maxvolunteer": "0",
        "shoulddescribe": 0,
        "showvolunteers": 0
    },
    {
        "lgid": "7",
        "listing": "sk",
        "area": "3381",
        "inviteonly": 1,
        "isrecruiting": 0,
        "description": "Brass we know is very rare 555",
        "volunteerpageuntil": "2006-02-09",
        "title": "brasstown brass",
        "maxvolunteer": "0",
        "shoulddescribe": 0,
        "showvolunteers": 0
    },
    {
        "lgid": "8",
        "listing": "sk",
        "area": "1036",
        "inviteonly": 0,
        "isrecruiting": 1,
        "description": "StreamTeam for Alarka Creek",
        "volunteerpageuntil": "2005-11-30",
        "title": "Stream Keeper Alarkacreek",
        "maxvolunteer": "0",
        "shoulddescribe": 0,
        "showvolunteers": 1
    },
    {
        "lgid": "9",
        "listing": "rc",
        "area": "NT",
        "inviteonly": 0,
        "isrecruiting": 0,
        "description": "NE people do stuff and need a formal group.",
        "volunteerpageuntil": "2006-02-01",
        "title": "North East Regional Coordinators",
        "maxvolunteer": "0",
        "shoulddescribe": 0,
        "showvolunteers": 0
    },
    {
        "lgid": "18",
        "listing": "board",
        "area": null,
        "inviteonly": 1,
        "isrecruiting": 0,
        "description": "Board of Directors",
        "volunteerpageuntil": null,
        "title": "Board of Directors",
        "maxvolunteer": "0",
        "shoulddescribe": 0,
        "showvolunteers": 0
    }
]
```


***Status Code:*** 200

<br>



## Listings



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/listings
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "listing": "",
        "name": "Festival Volunteers",
        "arealookup": "LookupEventInfo",
        "public": 0,
        "deleted": 1
    },
    {
        "listing": "*new*",
        "name": "Mobile Beta Testers",
        "arealookup": "",
        "public": 0,
        "deleted": 1
    },
    {
        "listing": "awmb",
        "name": "Mobile Web App Beta Testers",
        "arealookup": "",
        "public": 0,
        "deleted": 0
    },
    {
        "listing": "beta",
        "name": "Beta Testers",
        "arealookup": "",
        "public": 0,
        "deleted": 1
    },
    {
        "listing": "board",
        "name": "Board of Directors",
        "arealookup": "",
        "public": 1,
        "deleted": 0
    }
]
```


***Status Code:*** 200

<br>



## Member Update Stats



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/member-update-stats
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "update_date": "2007-09-03T17:11:36.000Z",
        "id": "1",
        "num_records": "28906",
        "num_current": "6065",
        "size": "8976746",
        "num_errors": "0"
    },
    {
        "update_date": "2007-09-03T17:16:21.000Z",
        "id": "2",
        "num_records": "28904",
        "num_current": "6065",
        "size": "8976746",
        "num_errors": "0"
    },
    {
        "update_date": "2007-09-03T17:44:54.000Z",
        "id": "3",
        "num_records": "28904",
        "num_current": "6065",
        "size": "8976746",
        "num_errors": "0"
    },
    {
        "update_date": "2007-09-03T17:26:36.000Z",
        "id": "4",
        "num_records": "28904",
        "num_current": "6065",
        "size": "8976746",
        "num_errors": "0"
    },
    {
        "update_date": "2007-09-05T01:08:02.000Z",
        "id": "5",
        "num_records": "28904",
        "num_current": "6059",
        "size": "8976746",
        "num_errors": "0"
    }
]
```


***Status Code:*** 200

<br>



## Members



### 1. Create



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



### 2. Delete



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



### 3. Get All


Returns all AW affiliates.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/members
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
{
    "count": 37074,
    "rows": [
        {
            "uname": null,
            "email": "info@amwhitewater.org",
            "zip": null,
            "address": null,
            "city": null,
            "state": null,
            "country": null,
            "volunteer": 0,
            "alerts": 0,
            "postal": 0,
            "memnum": "1",
            "address2": null,
            "home_phone": "",
            "work_phone": "",
            "journal": 0,
            "aw_beta": 0,
            "mbr_level": null,
            "bad_addr": 0,
            "bad_email": 0,
            "mod_date": "2019-09-17T04:00:06.000Z",
            "record_type": "",
            "name": null,
            "expiration": null,
            "mbr_relation": null,
            "annual_renew": 0
        },
        {
            "uname": null,
            "email": "edon@webtv.net",
            "zip": "03836-0308",
            "address": "Loon Rd",
            "city": "Freedom",
            "state": "NH",
            "country": "United States",
            "volunteer": 0,
            "alerts": 0,
            "postal": 0,
            "memnum": "3",
            "address2": "PO Box 308",
            "home_phone": "630-539-6398",
            "work_phone": "6128423",
            "journal": 1,
            "aw_beta": 0,
            "mbr_level": "Standard",
            "bad_addr": 0,
            "bad_email": 0,
            "mod_date": "2019-09-17T04:00:06.000Z",
            "record_type": "Ind",
            "name": "John Doe",
            "expiration": "2009-05-15T07:00:00.000Z",
            "mbr_relation": "Renewal",
            "annual_renew": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Update



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



## Membership Types



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/membership-types
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": "1",
        "name": "Club Mem                                                                        ",
        "desc": "Affiliate Club One-Year Membership for Clubs ",
        "price": "75.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "200",
        "fundstopremium": "0"
    },
    {
        "id": "2",
        "name": "Standard                                                                        ",
        "desc": "Regular One-Year Membership",
        "price": "35.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "10",
        "fundstopremium": "0"
    },
    {
        "id": "3",
        "name": "Ender Club                                                                      ",
        "desc": "Ender Club One-Year Membership",
        "price": "100.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "25",
        "fundstopremium": "15"
    },
    {
        "id": "4",
        "name": "Family                                                                          ",
        "desc": "Family One-Year Membership",
        "price": "50.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "20",
        "fundstopremium": "0"
    },
    {
        "id": "5",
        "name": "Legacy Paddler                                                                  ",
        "desc": "Legacy Lifetime Membership ",
        "price": "1000.00",
        "month": "1200",
        "summary": "                                                                                                    ",
        "fundstomembership": "750",
        "order": "70",
        "fundstopremium": "179"
    },
    {
        "id": "6",
        "name": "Junior                                                                          ",
        "desc": "Junior 1 Year Membership for Students",
        "price": "25.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "25",
        "order": "400",
        "fundstopremium": "0"
    },
    {
        "id": "7",
        "name": "Lifetime                                                                        ",
        "desc": "Lifetime Membership\r\n",
        "price": "750.00",
        "month": "1200",
        "summary": "                                                                                                    ",
        "fundstomembership": "750",
        "order": "50",
        "fundstopremium": "95"
    },
    {
        "id": "8",
        "name": "Platinum Paddler                                                                ",
        "desc": "Platinum Paddler 1 Year Membership",
        "price": "250.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "30",
        "fundstopremium": "52"
    },
    {
        "id": "9",
        "name": "Explorer                                                                        ",
        "desc": "Explorer One-Year Membership",
        "price": "500.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "35",
        "order": "40",
        "fundstopremium": "35"
    },
    {
        "id": "10",
        "name": "Steward                                                                         ",
        "desc": "Steward Lifetime Membership",
        "price": "2500.00",
        "month": "1200",
        "summary": "                                                                                                    ",
        "fundstomembership": "750",
        "order": "60",
        "fundstopremium": "0"
    },
    {
        "id": "11",
        "name": "Standard - Club Discount                                                        ",
        "desc": "Club Member One-Year Membership",
        "price": "25.00",
        "month": "12",
        "summary": "                                                                                                    ",
        "fundstomembership": "25",
        "order": "100",
        "fundstopremium": "0"
    },
    {
        "id": "12",
        "name": "Standard                                                                        ",
        "desc": "Regular Two-Year Membership",
        "price": "65.00",
        "month": "24",
        "summary": "                                                                                                    ",
        "fundstomembership": "65",
        "order": "15",
        "fundstopremium": "0"
    }
]
```


***Status Code:*** 200

<br>



## News



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/news
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 140 |  |



***More example Requests/Responses:***


##### I. Example Request: Get All



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| articleid | 140 |  |



##### I. Example Response: Get All
```js
[
    {
        "articleid": "140",
        "type": "accesslinks",
        "expiration": null,
        "priority": "0"
    },
    {
        "articleid": "140",
        "type": "safetylinks",
        "expiration": null,
        "priority": "0"
    }
]
```


***Status Code:*** 200

<br>



## Projects



### 1. Create



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



### 2. Delete



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



### 3. Get By Key



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/projects
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



##### I. Example Response: Get By Key
```js
{
    "id": "1",
    "name": "Gauley River (WV)",
    "description": "For many years AW has worked on the protection of this river and advocated for public access.",
    "uid": "0",
    "deleted": 0,
    "shortname": ""
}
```


***Status Code:*** 200

<br>



### 4. Update



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



### 1. Create



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



### 2. Delete



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



### 3. Get By Key


Get all rapids for a reach


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/rapid
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| rapidid |  |  |



***More example Requests/Responses:***


##### I. Example Request: Rapid



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| rapidid | 102199 |  |



##### I. Example Response: Rapid
```js
{
    "reachid": 10605,
    "rapidid": 102199,
    "name": "Bitch Monkey",
    "distance": 0.42,
    "difficulty": "5.2",
    "description": "<p>\n\tThis chaotic drop connects the third slide to the Back Canyon, but it has an irregular lip and a shallow landing. &nbsp; It can be run well, but unfortunately it&rsquo;s frequently run by accident. Formerly, there was an eddy or logjam above the slot but in recent years, rocks have shifted and much more water is rushing towards the dividing rock, and to the right over Bitch Monkey, which is now certainly in play.</p>\n",
    "photoid": 881376,
    "videoid": 0,
    "isputin": 0,
    "istakeout": 0,
    "isaccess": 0,
    "isportage": 0,
    "ishazard": 1,
    "iswaterfall": 1,
    "isplayspot": 0,
    "rlat": 38.9962997436523,
    "rlon": -77.2491989135742,
    "approximate": false,
    "deleted": false,
    "rloc": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "Point",
        "coordinates": [
            -77.2492,
            38.9963
        ]
    },
    "revision": 7464,
    "is_final": true,
    "created_at": "2019-01-25T05:28:08.308Z"
}
```


***Status Code:*** 200

<br>



##### II. Example Request: Reach Rapids



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid | 355 |  |



##### II. Example Response: Reach Rapids
```js
[
    {
        "reachid": 355,
        "rapidid": 11128,
        "name": "test lorem rapid",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11381,
        "is_final": true,
        "created_at": "2020-07-11T09:54:53.896Z"
    },
    {
        "reachid": 355,
        "rapidid": 106974,
        "name": "test lorem rapid",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11382,
        "is_final": true,
        "created_at": "2020-07-11T09:56:40.836Z"
    },
    {
        "reachid": 355,
        "rapidid": 106975,
        "name": "test another blah!!",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11383,
        "is_final": true,
        "created_at": "2020-07-11T10:03:02.490Z"
    }
]
```


***Status Code:*** 200

<br>



### 4. Get By Reach


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
| reachid |  |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Reach



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid | 1039 |  |



##### I. Example Response: Get By Reach
```js
[
    {
        "reachid": 1039,
        "rapidid": 658,
        "name": "Pinball / First Rapid",
        "distance": 0.4,
        "difficulty": "II",
        "description": "<p>\n\tPinaball / 1st Rapid is the 1st horizon line that you come to. Almost all paddlers will run the opening left of center. At the bottom is a rock squarely in the most direct path. One method is to boof left into an eddy above and left of the rock. This is fairly easy. The other method (shown in the photo) is to angle right of the bottom rock. The problem is that there is a hidden underwater rock that you will hit if you cheat and head right too soon. It will pinball you into the rock at the bottom which you are trying to avoid. This is much more of a problem at lower water levels. At higher levels the pinball rock is further under water and you can start right earlier. I&#39;m leaving the old text below.</p>\n<p>\n\tRun the left hand chute! The right hand chute (which appears to be the obvious route) runs into a pinning rock.</p>\n",
        "photoid": 882130,
        "videoid": 0,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 3750,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 659,
        "name": "Stairstep Rapid",
        "distance": 1,
        "difficulty": "III+",
        "description": "<p>\n\tStairstep is the 1st horizon line after Pinball. The first 3 steps are not large, but by the 4th one you need to be lined up properly to run the big drop into the hole (not a keeper). This is followed by a succession of fairly large breaking waves. Stairstep gets harder with higher water levels; above a foot it is fairly beefy. &nbsp;Next to the 1st step there is a large boulder in the center of the river (boaters will pass to the right of it) with a fairly large eddy behind it. A lot of boaters catch this eddy. You can do so but be aware that there is a sieve at the lower end of that eddy that a few people have been sucked into. Fortunately all flushed out. The tree trunk that was on river right has been gone for a couple years. &nbsp;</p>\n",
        "photoid": 882307,
        "videoid": 0,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 7538,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 660,
        "name": "Suddy Hole",
        "distance": 1.9,
        "difficulty": "III+",
        "description": "<p>\n\tSuddy Hole consists of two drops. Most boaters will eddy out after the 1st. As you look at the horizon line of the second, you will see a &quot;dead&quot; tree across the creek and at the bottom of the rapid. This tree is still partly alive and has a prominent &quot;Y&quot; about 15 ft from the bottom. &nbsp;If you aim for this tree, you will be on the most commonly run line. The nasty recircing Suddy hole is on boaters right. There is an exciting line on river left at higher (above 6 inches) levels.&nbsp;</p>\n",
        "photoid": 882187,
        "videoid": 0,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": true,
        "deleted": false,
        "rloc": null,
        "revision": 7574,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 102453,
        "name": "Lower Prelude",
        "distance": 2.2,
        "difficulty": "III",
        "description": "<p>\n\tPrelude (sometimes called False Narrows, Upper Narrows, and sometimes considered part of the Narrows) is a longish rapid and fairly intense, especially at higher water levels.&nbsp;</p>\n",
        "photoid": 882186,
        "videoid": 0,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": true,
        "deleted": false,
        "rloc": null,
        "revision": 4943,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 661,
        "name": "Narrows",
        "distance": 2.4,
        "difficulty": "III+",
        "description": "Start on river right moving towards river center over the first drop.  Run the slide that immediately follows down the center.",
        "photoid": 3672,
        "videoid": null,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 800,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 102452,
        "name": "Cliffside",
        "distance": 2.9,
        "difficulty": "II+",
        "description": "<p>\n\tThe path with enough water takes you to river right and to the base of a cliff. One good stroke at the right time keeps you from being pushed into it. Peter Van G is stylin it in the photo.&nbsp;</p>\n",
        "photoid": 882182,
        "videoid": 0,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": true,
        "deleted": false,
        "rloc": null,
        "revision": 4292,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 102454,
        "name": "Flume",
        "distance": 3.1,
        "difficulty": "II+",
        "description": "<p>\n\tSmall entry drop, then the main flume, run on river right. Smooth tongue leads into a breaking wave (low levels) or hole (medium and up). Hole is usually punched fairly easily.&nbsp;</p>\n",
        "photoid": 882188,
        "videoid": 0,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": true,
        "deleted": false,
        "rloc": null,
        "revision": 5215,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 102529,
        "name": "Humble Pie",
        "distance": 3.4,
        "difficulty": "III",
        "description": "<p>\n\tHumble Pie (aka Commitment Eddy) is the last rapid before the French Broad. Below about 8 inches, you are forced to take a route on the far left. The gap between the left bank and the 1st boulder is about 15 ft. Avoid the extreme left - i.e. the 5 ft closest to the left bank. &nbsp;The first hole tends to surf you to the left, the second more to the right. The boater in the picture is in the 1st hole. Above 8 inches a couple lines open up near the center. Below 0, it starts getting boney and one line is to make the &quot;commitment&quot; to catch the eddy behind that 1st large boulder. If you don&#39;t commit or blow the line you will be on a pinning rock. At those low levels, most people choose to make a couple quick turns around the partially exposed rocks.&nbsp;</p>\n",
        "photoid": 882306,
        "videoid": 0,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": true,
        "deleted": false,
        "rloc": null,
        "revision": 4302,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 662,
        "name": "Confluence with French Broad River",
        "distance": 3.7,
        "difficulty": null,
        "description": "To skip the 3 mile section on the French Broad, take out at the railroad tressle on river left.Â  Carry 0.7 miles up the railroad tracks to Stackhouse.Â  This also shortens the shuttle run.",
        "photoid": null,
        "videoid": null,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 1,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 801,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 663,
        "name": "Kayak Ledge (Needle Falls)",
        "distance": 4.7,
        "difficulty": "III",
        "description": "Run this five foot ledge on the right of the island.",
        "photoid": null,
        "videoid": null,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 802,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    },
    {
        "reachid": 1039,
        "rapidid": 664,
        "name": "Frank Bell's Rapid (Deep Water Rapid)",
        "distance": 5.7,
        "difficulty": "IV",
        "description": "This rapid is a long series of ledges and holes.  Start left and avoid the holes.  Aim for the right side of the bottom hole at higher water levels.",
        "photoid": null,
        "videoid": null,
        "isputin": 0,
        "istakeout": 0,
        "isaccess": 0,
        "isportage": 0,
        "ishazard": 0,
        "iswaterfall": 0,
        "isplayspot": 0,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 803,
        "is_final": true,
        "created_at": "2019-01-25T05:28:08.308Z"
    }
]
```


***Status Code:*** 200

<br>



##### II. Example Request: Reach Rapids



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid | 355 |  |



##### II. Example Response: Reach Rapids
```js
[
    {
        "reachid": 355,
        "rapidid": 11128,
        "name": "test lorem rapid",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11381,
        "is_final": true,
        "created_at": "2020-07-11T09:54:53.896Z"
    },
    {
        "reachid": 355,
        "rapidid": 106974,
        "name": "test lorem rapid",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11382,
        "is_final": true,
        "created_at": "2020-07-11T09:56:40.836Z"
    },
    {
        "reachid": 355,
        "rapidid": 106975,
        "name": "test another blah!!",
        "distance": 0.1,
        "difficulty": "V",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "photoid": null,
        "videoid": null,
        "isputin": null,
        "istakeout": null,
        "isaccess": null,
        "isportage": null,
        "ishazard": null,
        "iswaterfall": null,
        "isplayspot": null,
        "rlat": 0,
        "rlon": 0,
        "approximate": false,
        "deleted": false,
        "rloc": null,
        "revision": 11383,
        "is_final": true,
        "created_at": "2020-07-11T10:03:02.490Z"
    }
]
```


***Status Code:*** 200

<br>



### 5. Update



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



## Reach Map



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-map
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 2,
        "name": "Aniakchak - Surprise Lake to Aniakchak Bay",
        "state": "USA-ALK",
        "river": "Aniakchak",
        "section": "Surprise Lake to Aniakchak Bay",
        "altname": null,
        "county": "Aniakchak National Park and Preserve",
        "zipcode": "99571",
        "huc": "19020702",
        "plat": 56.9059982299805,
        "plon": -158.080902099609,
        "tlat": 56.7634010314941,
        "tlon": -157.493392944336,
        "skid": null,
        "class": "I-IV",
        "abstract": null,
        "updated": null,
        "reading": null,
        "gauge_min": null,
        "gauge_max": null,
        "gauge_metric": null,
        "obs_id": null,
        "gauge_id": null,
        "gauge_reading": null,
        "last_gauge_reading": null,
        "last_gauge_updated": null,
        "gauge_comment": null,
        "gauge_data": null,
        "river_data": null,
        "last_journal_update": null,
        "tloc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -158.081,
                56.906
            ]
        },
        "ploc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -157.493,
                56.7634
            ]
        },
        "status": "u",
        "adjusted_reach_class": null,
        "gauge_important": null,
        "gauge_estimated": null,
        "gauge_perfect": null,
        "range_comment": null
    },
    {
        "id": 3,
        "name": "Browns Creek - Browns Creek Canyon",
        "state": "USA-ALK",
        "river": "Browns Creek",
        "section": "Browns Creek Canyon",
        "altname": null,
        "county": "Near Valdez",
        "zipcode": "99686",
        "huc": "19020201",
        "plat": 60.9542007446289,
        "plon": -145.914001464844,
        "tlat": 61.0467987060547,
        "tlon": -145.932693481445,
        "skid": null,
        "class": "III",
        "abstract": null,
        "updated": null,
        "reading": null,
        "gauge_min": null,
        "gauge_max": null,
        "gauge_metric": null,
        "obs_id": null,
        "gauge_id": null,
        "gauge_reading": null,
        "last_gauge_reading": null,
        "last_gauge_updated": null,
        "gauge_comment": null,
        "gauge_data": null,
        "river_data": null,
        "last_journal_update": null,
        "tloc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -145.914,
                60.9542
            ]
        },
        "ploc": {
            "crs": {
                "type": "name",
                "properties": {
                    "name": "EPSG:4326"
                }
            },
            "type": "Point",
            "coordinates": [
                -145.933,
                61.0468
            ]
        },
        "status": "u",
        "adjusted_reach_class": null,
        "gauge_important": null,
        "gauge_estimated": null,
        "gauge_perfect": null,
        "range_comment": null
    }
]
```


***Status Code:*** 200

<br>



## Reach Permits



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-permits
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "reachid": 1,
        "state": "USA-ALK"
    },
    {
        "reachid": 50,
        "state": "USA-ALK"
    },
    {
        "reachid": 114,
        "state": "USA-ARZ"
    },
    {
        "reachid": 123,
        "state": "USA-ARZ"
    },
    {
        "reachid": 326,
        "state": "USA-CAL"
    },
    {
        "reachid": 381,
        "state": "USA-COL"
    },
    {
        "reachid": 389,
        "state": "USA-COL"
    },
    {
        "reachid": 437,
        "state": "USA-COL"
    },
    {
        "reachid": 533,
        "state": "USA-IDA"
    },
    {
        "reachid": 561,
        "state": "USA-IDA"
    }
]
```


***Status Code:*** 200

<br>



## Reach States



### 1. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reach-states
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    {
        "id": 1190167,
        "state": "USA-ALK",
        "reach_id": 2
    },
    {
        "id": 1190168,
        "state": "USA-ALK",
        "reach_id": 3
    },
    {
        "id": 1190169,
        "state": "USA-ALK",
        "reach_id": 4
    },
    {
        "id": 1190170,
        "state": "USA-ALK",
        "reach_id": 5
    },
    {
        "id": 1190171,
        "state": "USA-ALK",
        "reach_id": 6
    },
    {
        "id": 1190172,
        "state": "USA-ALK",
        "reach_id": 7
    },
    {
        "id": 1190173,
        "state": "USA-ALK",
        "reach_id": 8
    },
    {
        "id": 1190175,
        "state": "USA-ALK",
        "reach_id": 10
    },
    {
        "id": 1190176,
        "state": "USA-ALK",
        "reach_id": 11
    },
    {
        "id": 1190177,
        "state": "USA-ALK",
        "reach_id": 12
    }
]
```


***Status Code:*** 200

<br>



## Reaches



### 1. Create



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



### 2. Delete



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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/reaches
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| class | I |  |
| river | qu |  |
| section | ut |  |



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
{
    "count": 22984,
    "rows": [
        {
            "id": 2,
            "river": "Aniakchak",
            "section": "Surprise Lake to Aniakchak Bay",
            "altname": null,
            "county": "Aniakchak National Park and Preserve",
            "zipcode": "99571",
            "length": 32,
            "avggradient": 30,
            "maxgradient": 83,
            "agency": "National Park Service",
            "gaugeinfo": "<p>Look for 1000-2000 cfs in July (based on \r\nEmbick).</p>",
            "description": "<p>The Aniakchak River, a Federally-designated Wild and Scenic River, is located within the <a \r\nhref=\"http://www.nps.gov/ania/\">Aniakchak National Mounment and Preserve</a> providing an \r\nopportunity for a remote river expedition on the Alaska Peninusla. Trips usually take place during \r\nthe month of July. Plan for 3-4 days but be prepared for longer as weather conditions often dictate \r\nthe schedule.</p>\r\n\r\n<p>The Aniakchak Volcano underwent a catostrophic explosive erruption approximately 3400 \r\nyears \r\nago that formed the current caldera. Smaller erruptions have occurred more recently, with the last \r\none in 1931. Surprise Lake, located within the 5.9 mile diameter caldera, is the source of the \r\nAniakchak River. This caldera has its own microclimate marked by consistently wet weather and \r\nharsh winds. Despite this it offers opportunities for exploration and hiking across the volcanic \r\nlandscape.</p>\r\n\r\n<p>From the lake the river begins at a slow pace for the first mile before entering the \"Gates\", a \r\n1500 foot gash in \r\nthe \r\ncaldera wall. Here the river drops at a rate of 73 feet per mile with class IV whitewater. The river \r\nremains class II/III for the next 10 miles (if you're in an inflatible be sure to pack the patch kit as \r\nthe sharp volcanic rocks can do a number on your boat). At the confluence of Hidden Creek the \r\nriver enters the steep 83 feet per mile section where volcanic bedrock on either side and boulders \r\nin the channel constrict the flow. The pace of the river begins to slow considerably over the next \r\nfive miles \r\nas you leave this section and continue the remainder of the journey on a low-gradient alluvial river \r\nthat takes you to the ocean.<p>\r\n\r\n<p>The river system \r\nsupports all five species of salmon and Surprise Lake provides spawning habitat and a nursery for \r\nsockeye salmon and artic char. Dolly Varden are also present. Wildlife are abundant and brown \r\nbear are common along this river so be sure to take proper precautions and be prepared for \r\nencounters.\r\n</p>\r\n\r\n<p>LOGISTICS: The expense of getting to this river and the unpredictable weather keep usage \r\nlow. You can get commerical service into King Salmon or to Port Heiden. From either of these \r\nairstrips you'll need to arrange for a float plane charter to Surprise Lake. King Salmon \r\nis further away (150 miles vs. 20 miles) but offers more options. You will also need to arrange for \r\npick up at the end of your trip where the river meets the ocean at Aniakchak Bay. Float planes can \r\nland in the bay or wheel planes can land on the beachhead. Poor weather conditions can delay \r\nflights so plan accordingly. There is a shelter at the beach for boaters awaiting pick up. This region \r\nis extremely remote with no practical access to outside assistance.</p>",
            "photoid": 8547,
            "permitid": null,
            "huc": "19020702",
            "plat": 56.9059982299805,
            "plon": -158.080902099609,
            "prrn": null,
            "tlat": 56.7634010314941,
            "tlon": -157.493392944336,
            "trrn": null,
            "skid": null,
            "status": "u",
            "edited": "2004-09-03T20:12:15.000Z",
            "is_final": true,
            "revision": 1189796,
            "class": "I-IV",
            "ploc": {
                "crs": {
                    "type": "name",
                    "properties": {
                        "name": "EPSG:4326"
                    }
                },
                "type": "Point",
                "coordinates": [
                    -158.081,
                    56.906
                ]
            },
            "tloc": {
                "crs": {
                    "type": "name",
                    "properties": {
                        "name": "EPSG:4326"
                    }
                },
                "type": "Point",
                "coordinates": [
                    -157.493,
                    56.7634
                ]
            },
            "was_final": true,
            "thumboverride": false,
            "shuttledetails": null,
            "abstract": null,
            "direction_default": 1,
            "custom_destination": null,
            "revision_comment": null,
            "permiturl": null,
            "permitinfo": null,
            "image_override": null,
            "geom": null
        }
    ]
}
```


***Status Code:*** 200

<br>



### 4. Get By Key


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



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 2 |  |



##### I. Example Response: Get By Key
```js
{
    "id": 2,
    "river": "Aniakchak",
    "section": "Surprise Lake to Aniakchak Bay",
    "altname": null,
    "county": "Aniakchak National Park and Preserve",
    "zipcode": "99571",
    "length": 32,
    "avggradient": 30,
    "maxgradient": 83,
    "agency": "National Park Service",
    "gaugeinfo": "<p>Look for 1000-2000 cfs in July (based on \r\nEmbick).</p>",
    "description": "<p>The Aniakchak River, a Federally-designated Wild and Scenic River, is located within the <a \r\nhref=\"http://www.nps.gov/ania/\">Aniakchak National Mounment and Preserve</a> providing an \r\nopportunity for a remote river expedition on the Alaska Peninusla. Trips usually take place during \r\nthe month of July. Plan for 3-4 days but be prepared for longer as weather conditions often dictate \r\nthe schedule.</p>\r\n\r\n<p>The Aniakchak Volcano underwent a catostrophic explosive erruption approximately 3400 \r\nyears \r\nago that formed the current caldera. Smaller erruptions have occurred more recently, with the last \r\none in 1931. Surprise Lake, located within the 5.9 mile diameter caldera, is the source of the \r\nAniakchak River. This caldera has its own microclimate marked by consistently wet weather and \r\nharsh winds. Despite this it offers opportunities for exploration and hiking across the volcanic \r\nlandscape.</p>\r\n\r\n<p>From the lake the river begins at a slow pace for the first mile before entering the \"Gates\", a \r\n1500 foot gash in \r\nthe \r\ncaldera wall. Here the river drops at a rate of 73 feet per mile with class IV whitewater. The river \r\nremains class II/III for the next 10 miles (if you're in an inflatible be sure to pack the patch kit as \r\nthe sharp volcanic rocks can do a number on your boat). At the confluence of Hidden Creek the \r\nriver enters the steep 83 feet per mile section where volcanic bedrock on either side and boulders \r\nin the channel constrict the flow. The pace of the river begins to slow considerably over the next \r\nfive miles \r\nas you leave this section and continue the remainder of the journey on a low-gradient alluvial river \r\nthat takes you to the ocean.<p>\r\n\r\n<p>The river system \r\nsupports all five species of salmon and Surprise Lake provides spawning habitat and a nursery for \r\nsockeye salmon and artic char. Dolly Varden are also present. Wildlife are abundant and brown \r\nbear are common along this river so be sure to take proper precautions and be prepared for \r\nencounters.\r\n</p>\r\n\r\n<p>LOGISTICS: The expense of getting to this river and the unpredictable weather keep usage \r\nlow. You can get commerical service into King Salmon or to Port Heiden. From either of these \r\nairstrips you'll need to arrange for a float plane charter to Surprise Lake. King Salmon \r\nis further away (150 miles vs. 20 miles) but offers more options. You will also need to arrange for \r\npick up at the end of your trip where the river meets the ocean at Aniakchak Bay. Float planes can \r\nland in the bay or wheel planes can land on the beachhead. Poor weather conditions can delay \r\nflights so plan accordingly. There is a shelter at the beach for boaters awaiting pick up. This region \r\nis extremely remote with no practical access to outside assistance.</p>",
    "photoid": 8547,
    "permitid": null,
    "huc": "19020702",
    "plat": 56.9059982299805,
    "plon": -158.080902099609,
    "prrn": null,
    "tlat": 56.7634010314941,
    "tlon": -157.493392944336,
    "trrn": null,
    "skid": null,
    "status": "u",
    "edited": "2004-09-03T20:12:15.000Z",
    "is_final": true,
    "revision": 1189796,
    "class": "I-IV",
    "ploc": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "Point",
        "coordinates": [
            -158.081,
            56.906
        ]
    },
    "tloc": {
        "crs": {
            "type": "name",
            "properties": {
                "name": "EPSG:4326"
            }
        },
        "type": "Point",
        "coordinates": [
            -157.493,
            56.7634
        ]
    },
    "was_final": true,
    "thumboverride": false,
    "shuttledetails": null,
    "abstract": null,
    "direction_default": 1,
    "custom_destination": null,
    "revision_comment": null,
    "permiturl": null,
    "permitinfo": null,
    "image_override": null
}
```


***Status Code:*** 200

<br>



### 5. Update


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



### 1. Create



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



### 2. Delete



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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/states
```



***More example Requests/Responses:***


##### I. Example Request: Get All



##### I. Example Response: Get All
```js
[
    "",
    "AB",
    "AK",
    "AL",
    "AR",
    "AZ",
    "BC",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MB",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NB",
    "NC",
    "ND",
    "NE",
    "NF",
    "NH",
    "NJ",
    "NM",
    "NS",
    "NT",
    "NU",
    "NV",
    "NY",
    "OH",
    "OK",
    "ON",
    "OR",
    "PA",
    "PI",
    "PQ",
    "RI",
    "SC",
    "SD",
    "SK",
    "TN",
    "TX",
    "UT",
    "VA",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
    "YT"
]
```


***Status Code:*** 200

<br>



### 4. Update



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



### 1. Create



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



### 2. Delete



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



### 3. Get All


Returns all tpoplogy records.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/topology-all
```



### 4. Get By Key


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



### 5. Update



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



### 1. Create



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



### 2. Delete



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



### 3. Get All By Key


Get all trip logs associated with a reach.


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



***More example Requests/Responses:***


##### I. Example Request: Reach Trip Logs



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| reachid | 1002 |  |



##### I. Example Response: Reach Trip Logs
```js
[
    {
        "id": 891701,
        "state": "MT",
        "rivername": "@Flathead Buffalo Rapids: Kerr Dam to County Road Bridge",
        "reachid": 1002,
        "datetaken": "03/22/18",
        "level": null,
        "description": null,
        "uid": 2096,
        "deleted": false,
        "observation": null,
        "title": "Rafting on Buffalo Rapids! ",
        "obs_time": "2018-03-23T01:12:00.000Z",
        "reading": null,
        "gaugeid": 38188,
        "metric": null,
        "edit_option": 0
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



### 1. Create



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



### 2. Delete



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



### 3. Get All By Key


Get all photos for a trip log.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/trip-log-photos
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| triplog_id |  |  |



***More example Requests/Responses:***


##### I. Example Request: Trip Log Photos



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| triplog_id | 1001 |  |



##### I. Example Response: Trip Log Photos
```js
[
    {
        "id": 19248,
        "caption": "Hueco Falls",
        "rapidname": "",
        "thumbnail": true,
        "ext": "jpeg",
        "isvideo": false,
        "filesize": "2403659",
        "deleted": false,
        "triplog_id": 1001,
        "author": "",
        "subject": "",
        "detail": "",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 19437,
        "caption": "Buffalo Rapid",
        "rapidname": "",
        "thumbnail": false,
        "ext": "",
        "isvideo": false,
        "filesize": "0",
        "deleted": false,
        "triplog_id": 1001,
        "author": "",
        "subject": "",
        "detail": "",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 31060,
        "caption": "suejavqa",
        "rapidname": "suejavqa",
        "thumbnail": false,
        "ext": "",
        "isvideo": false,
        "filesize": "0",
        "deleted": false,
        "triplog_id": 1001,
        "author": "suejavqa",
        "subject": "suejavqa",
        "detail": " vzyeeiwo http://ifuffleo.com klizuatt ejucfadd  <a href=\"http://xmqoyqah.com\">xkkwsyyf</a>  [URL=http://lwqhejhh.com]twkadunx[/URL] ",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 32788,
        "caption": "gbvwegvc",
        "rapidname": "gbvwegvc",
        "thumbnail": false,
        "ext": "",
        "isvideo": false,
        "filesize": "0",
        "deleted": false,
        "triplog_id": 1001,
        "author": "gbvwegvc",
        "subject": "gbvwegvc",
        "detail": " <a href=\"http://etvkwevm.com\">hwpmrugp</a>  [URL=http://ywhemqze.com]iwyvsfbd[/URL]  ugxhzqqo http://liltbgyv.com jxjklmqm tqczfatc ",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 19147,
        "caption": ".",
        "rapidname": "",
        "thumbnail": true,
        "ext": "",
        "isvideo": false,
        "filesize": "1662976",
        "deleted": false,
        "triplog_id": 1001,
        "author": "",
        "subject": "",
        "detail": "",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 19151,
        "caption": ".",
        "rapidname": "",
        "thumbnail": true,
        "ext": "",
        "isvideo": false,
        "filesize": "1662976",
        "deleted": false,
        "triplog_id": 1001,
        "author": "",
        "subject": "",
        "detail": "",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 32793,
        "caption": "aowkggck",
        "rapidname": "aowkggck",
        "thumbnail": false,
        "ext": "",
        "isvideo": false,
        "filesize": "0",
        "deleted": false,
        "triplog_id": 1001,
        "author": "aowkggck",
        "subject": "aowkggck",
        "detail": " kckpwrvb http://lmbplpzk.com inavzwll hfjqkgyo  [URL=http://aqkkpcdy.com]mquaszwt[/URL]  <a href=\"http://dkdvgfgr.com\">nqumtodt</a> ",
        "allowhtml": false,
        "url": null
    },
    {
        "id": 35512,
        "caption": "",
        "rapidname": "",
        "thumbnail": false,
        "ext": "",
        "isvideo": false,
        "filesize": "0",
        "deleted": false,
        "triplog_id": 1001,
        "author": "",
        "subject": "",
        "detail": "",
        "allowhtml": false,
        "url": null
    }
]
```


***Status Code:*** 200

<br>



### 4. Update



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



### 1. Create



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



### 2. Delete



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



### 3. Get All



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/users
```



### 4. Get By Key



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:8000/user
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 1 |  |



***More example Requests/Responses:***


##### I. Example Request: Get By Key



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| uid | 1 |  |



##### I. Example Response: Get By Key
```js
{
    "uid": "1",
    "uname": "Griffin_Corkery",
    "upass": "zPyW64Rf",
    "verifydate": "2020-10-20",
    "email": "Derrick55@yahoo.com",
    "zip": "65056-4450",
    "address": "7259 Dietrich Meadows",
    "city": "East Zakary",
    "state": "TN",
    "country": "Armenia",
    "lastlogin": "2020-10-20T23:10:28.691Z",
    "volunteer": null,
    "alerts": null,
    "postal": null,
    "memnum": "45124",
    "address2": null,
    "home_phone": "901-700-7153",
    "work_phone": "788.993.7151 x98363",
    "journal": null,
    "aw_beta": null,
    "mbr_level": null,
    "bad_addr": null,
    "bad_email": null,
    "mod_date": null,
    "record_type": null,
    "name": "Skylar",
    "mem_transaction": null,
    "transaction_id": null,
    "expiration": null,
    "modifydate": null,
    "pushdate": null,
    "mbr_relation": null,
    "prefs": null,
    "annual_renew": null,
    "code": null,
    "googleid": null,
    "socialprofile": null,
    "facebookid": null,
    "epassword": null,
    "remember_token": null,
    "created_at": "2020-10-20T23:10:28.691Z",
    "updated_at": "2020-10-20T23:10:28.691Z"
}
```


***Status Code:*** 200

<br>



### 5. Update



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



## User Auth



### 1. Login


Create an accident report.


***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:8000/user-login
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| email | foo@aol.com |  |
| password | updatetest |  |



***More example Requests/Responses:***


##### I. Example Request: Login



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| email | foo@email.com |  |
| password | password |  |



##### I. Example Response: Login
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZvb0Bhb2wuY29tIiwiaWF0IjoxNTk0Njg2MzMwLCJleHAiOjE1OTQ2ODY2MzB9.ddefDTo6yHQNwDE-y7Nn2BRk74cwVsJBkzlgbzXmp_E"
}
```


***Status Code:*** 200

<br>



***Available Variables:***

| Key | Value | Type |
| --- | ------|-------------|
| base_url | http://localhost:8000 |  |


