process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configMongoose=require('./config/mongoose');
const configureExpress=require('./config/express');

const db=configMongoose();
const app=configureExpress();

app.listen(6000);

module.exports=app;

console.log('server running at http://localhost:6000/');