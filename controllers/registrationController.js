const User = require('../models/userModel')

const registrationController = async (req,res)=>{
    const {username, email, password} = req.body

    const existingUser = await User.findOne({email: email})

    if(existingUser){
        return res.send('User already exist')
    }

    const user = new User({
        username: username,
        email: email,
        password: password

    })
    user.save()

    res.send(user)
}

const allUserController= async (req,res)=>{
    let data= await User.find({})
    res.send(data)
}

const deleteUser = async (req,res)=>{
    const{id} = req.body

    await User.findByIdAndDelete(id)

    res.send("User deleted")
}

const updateUser = async (req,res)=>{
    const {id} = req.params

    let data = await User.findByIdAndUpdate({_id:id},req.body)

    res.send("Data updated")
}

module.exports = {registrationController, allUserController,deleteUser, updateUser}