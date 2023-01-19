migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gid2i1cvcmcmf0e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8lxgnbfe",
    "name": "coverImage",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gid2i1cvcmcmf0e")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
