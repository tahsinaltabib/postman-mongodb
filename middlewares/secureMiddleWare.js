const secureMiddleWare = (req,res,next)=>{
    let password = "tabib451045"
    let pass = req.headers.authorization

    if(password === pass){
        next()
    }else{
        res.send("Unauthorized (You have 3 attempts to enter the correct password)")
    }
}

module.exports = secureMiddleWare