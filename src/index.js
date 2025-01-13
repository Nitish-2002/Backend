//importing the packages
const express= require('express');
const dotenv = require('dotenv');
const path=require('path');
const fs= require('fs');
const body_parser=require('body-parser');
//calling the express function
const app= express();



// using the body parser we are importing the json
app.use(body_parser.json());
//calling the env
const env=process.env.REACT_APP_ENV;
//Setting the path of the dotenv
dotenv.config({path: `./environments/.env.${env}`});

//importing the files
const sequelize = require('./config/db');
const route=require('./routes') 




//Calling the routes
app.use('/',route)

app.listen(process.env.PORT, ()=>{
    console.log(  `The port is listening on port ${process.env.PORT} and link is ${process.env.BACKEND_LINK}`)
})