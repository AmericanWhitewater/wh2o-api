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

### Reaches

### Get Single Reach

GET

```
/reach?id={{ some_id }}
```

### Create Reach

POST

```
/new-reach
```

*Body*

Minimum requirements

```
{
  river: '',
  section: '',
  is_final: false,
  class: '',
  description: '',
}
```

### Update Reach

PUT

```
/update-reach
```

Body can contain any field except for id.

```
{
  river: 'Some crazy new river name',
}
```

### Delete Reach

DELETE

```
/delete-reach?id={{ some_id }}
```