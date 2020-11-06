const express=require('express');
const app=express()
const cors=require('cors');
const mongoose=require('mongoose')

const port=process.env.Port||3000

app.use(cors())               
app.use(express.json())

const uri=process.env.ATLAS_URI //mongodb url

mongoose.connect(uri)

mongoose.connection.once('open',()=>{

    console.log("MongoDB Connected")
})

app.get('/',(req,res)=>{

    res.send("<h1>Node Server</h1>")
})

app.listen(port,()=>{
    console.log('server Started At ',port)
})