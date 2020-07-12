# Generate Docs

## Requirements

- [docgen](https://github.com/thedevsaddam/docgen)
- [postman](https://www.postman.com/)

Generating endpoint documentation is a multi-step process. All endpoints are documented in [Postman](https://www.postman.com/). There is a tracked postman collection available at `wh2o-api/docs/wh2o-api.postman_collection.json`. You can import the JSON into Postman and use it as a starting point. 

When you're ready to publish your endpoint docs, export the collection from Postman and save the collection then cd to the enclosing folder. From here run:

```
docgen build -i wh2o-api.postman_collection.json -o ~/Downloads/wh2o-api.md -m
```

Docgen is wh2o-api.postman_collection.json as the input file and then outputting a Markdown file named wh2o-api.md in the Downloads directory. Open the newly created markdown file, then copy all the contents below the Indices, then paste in the endpoints.md file: `wh2o-api/docs/endpoints/README.md`. 