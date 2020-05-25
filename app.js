const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();

//import routes
const postsRoute = require('./src/routes/posts')
const categoriesRoute = require('./src/routes/categories')

//middlewares
app.use(express.json());
app.use('/posts', postsRoute);
app.use('/categories', categoriesRoute)

app.use(bodyParser.json());
app.use(cors()); //invoke the cors fn

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, ()=>{
    console.log('conected to db')
})

//listen on a server
const port = 6000;
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})
