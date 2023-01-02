const express = require('express')
const router = express.Router()
const schema = require('../models/user_schema')
const path = require('path')

router.post('/register',async (req,res)=>{

    const data = await schema.findOne({email:req.body.email})
    if(data) return res.send("Email Already exists")

    const user = new schema({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }) 
    try {
        await user.save()
        res.render('home')
        
    } catch (error) {
        res.render("login_error",{message:error.message})
    }

})

// router.get('/register',(req,res)=>{
//     res.sendFile(path.join(__dirname,'..//public/login.html'))
// })


router.post('/login',async (req,res)=>{

    const data = await schema.findOne({email:req.body.email})
    if(!data) return res.render('login_error',{
        message:"Account Doesnt exist"
    })
    try {
         if(data.password===req.body.password){
            res.render('home')
        }
        else{
            res.render('login_error',{message:"Invalid Password"})
        }
    } catch (error) {
        res.render('login_error',{message:error.message})
    }
})













module.exports = router