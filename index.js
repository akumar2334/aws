const express=require('express')
const app=express()
const port=8000

app.get('/',(req,res)=>res.send({message:`Hello Everyone from github `}))



app.listen(port,()=>console.log(`server running ${port}`))