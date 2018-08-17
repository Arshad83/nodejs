


# MongoDB:

>1st in command prompt
> $mongod
2nd command prompt
> $mongo

by default mongo use test database

>use mean
>mongo mean
mongo uses lazily until unless u create data
> show dbs
It will not show 'mean' database
> db.posts.insert({"title":"First Post", "user": "bob"})
> db.posts.find()

> show collections // posts

delete database
> db.posts.drop()

# mongoose
- Mongoose is a Node.js module that provides developers with the ability to model objects and save them as MongoDB documents.
- While MongoDB is a schemaless database, Mongoose offers you the opportunity to enjoy both strict and loose schema approaches when dealing with Mongoose models.