const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { response } = require('express')
const route = require('./routes/user')
const ejs = require('ejs')
const path = require('path')
const menu = require('./models/menu')
dotenv.config()

app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'))

mongoose.set('strictQuery', false);
mongoose.connect(process.env.dbconnect,console.log("Success"))


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : false}))
app.use('/user',route)

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html')
})

app.post('/add',async(req,res)=>{
    const item = new menu({
        image
    })
})

app.listen(4000,console.log("4000"))

