migrate((db) => {
  const collection = new Collection({
    "id": "gid2i1cvcmcmf0e",
    "created": "2023-01-17 07:29:55.274Z",
    "updated": "2023-01-17 07:29:55.274Z",
    "name": "album",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "agrodnph",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mxnss8g7",
        "name": "artist",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "4oayddslt50wswm",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "lxfa8ffc",
        "name": "releaseDate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "8lxgnbfe",
        "name": "coverImage",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gid2i1cvcmcmf0e");

  return dao.deleteCollection(collection);
})
