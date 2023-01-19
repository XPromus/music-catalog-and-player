migrate((db) => {
  const collection = new Collection({
    "id": "fl5nnzlfehnswor",
    "created": "2023-01-18 16:50:14.100Z",
    "updated": "2023-01-18 16:50:14.100Z",
    "name": "song",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qwn7w9me",
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
        "id": "pbto2jk6",
        "name": "cover",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "ygcopu64",
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
        "id": "2telzbpq",
        "name": "album",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "gid2i1cvcmcmf0e",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "zs0g1inj",
        "name": "release",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "h4llsj3p",
        "name": "numberOfListens",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "rgb5vfmz",
        "name": "like",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "9d04liqf",
        "name": "lyrics",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "epjggurm",
        "name": "musicVideoYouTube",
        "type": "url",
        "required": false,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": [
            "youtube.com"
          ]
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
  const collection = dao.findCollectionByNameOrId("fl5nnzlfehnswor");

  return dao.deleteCollection(collection);
})
