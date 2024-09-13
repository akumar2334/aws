const express=require('express')
const app=express()
const port=8000

app.get('/',(req,res)=>res.send({message:`Hello Everyone from github `}))

app.get('/login',(req,res)=>{
    res.send({
        message: 'this is login routes'
    })
})



app.listen(port,()=>console.log(`server running ${port}`))