require('dotenv').config()
require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
const express = require('express')
const secureMiddleWare = require('./middlewares/secureMiddleware')
const {registrationController,allUserController,deleteUser,updateUser} = require('./controllers/registrationController')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected");
})


app.use(express.json())

app.post('/registration',registrationController)
app.get('/allusers',allUserController)
app.delete('/user/delete',deleteUser)
app.post('/update/:id',updateUser)



app.listen(5000,()=>{
    console.log("Server is running");
    
})
