require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
const express = require('express')
const secureMiddleWare = require('./middlewares/secureMiddleware')
const registrationController = require('./controllers/registrationController')
const app = express()
const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://Tabib:inception2010@tabib21.u6dnqxm.mongodb.net/todo?appName=tabib21').then(()=>{
    console.log("Database Connected");
})


app.use(express.json())

app.get('/bankamount',secureMiddleWare,registrationController)



app.listen(5000,()=>{
    console.log("Server is running");
    
})
