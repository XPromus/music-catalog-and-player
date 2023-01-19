migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oayddslt50wswm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qprtgmj9",
    "name": "artistPage",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oayddslt50wswm")

  // remove
  collection.schema.removeField("qprtgmj9")

  return dao.saveCollection(collection)
})
