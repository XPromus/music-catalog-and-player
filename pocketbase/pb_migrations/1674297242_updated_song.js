migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fl5nnzlfehnswor")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbekjmip",
    "name": "useAlbumCover",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fl5nnzlfehnswor")

  // remove
  collection.schema.removeField("fbekjmip")

  return dao.saveCollection(collection)
})
