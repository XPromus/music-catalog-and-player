migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fl5nnzlfehnswor")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epjggurm",
    "name": "musicVideoYouTube",
    "type": "url",
    "required": false,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fl5nnzlfehnswor")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
