const express=require('express')
const app=express()

app.get('/',(req,res)=>res.send({message:`Hello Everyone from github `}))



app.listen(8000,()=>console.log(`server running`))