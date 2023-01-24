migrate((db) => {
  const collection = new Collection({
    "id": "02q6cdqc25nxx4l",
    "created": "2023-01-22 21:31:01.117Z",
    "updated": "2023-01-22 21:31:01.117Z",
    "name": "songTag",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r3ska5zc",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6ul2ym6k",
        "name": "color",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
        }
      },
      {
        "system": false,
        "id": "qhxgx59p",
        "name": "songs",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "fl5nnzlfehnswor",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("02q6cdqc25nxx4l");

  return dao.deleteCollection(collection);
})
