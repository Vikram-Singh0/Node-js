const express=require('express')
const http=require('http')

const app=express()

app.get('/',(req,res)=>{
  return res.send(`welcome home ${req.query.name}`)

})

app.get('/about',(req,res)=>{
  return res.send("Mukka laat karte h ")
})


app.listen(5000,()=>console.log('Listening on port 5000'))

// const myServer=http.createServer(app)

// myServer.listen(5000,()=>console.log('listening on port 5000'))