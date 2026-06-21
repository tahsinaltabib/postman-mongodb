const express = require('express')
const secureMiddleWare = require('./middlewares/secureMiddleware')
const bankAmountController = require('./controllers/bankAmountcontroller')
const app = express()

app.use(express.json())

// app.post('/registration',(req,res)=>{
//     const {username, email, password} = req.body;
//     // console.log(username, email, password);

//     if(!username){
//         res.send("Username is required")
//     }
//     if(!email){
//         res.send("Email is required")
//     }
// })

// --------------------------------------------------------------

// app.post('/login',(req, res)=>{
//     const {email, password} = req.body


//     res.send()
// })


app.get('/bankamount',secureMiddleWare,bankAmountController)



app.listen(5000,()=>{
    console.log("Server is running");
    
})
