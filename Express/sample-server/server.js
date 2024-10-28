const express = require('express')
const port = 4000

const app = express()

app.use(express.json())



app.get('/',(req,res)=>{
     res.status(200).json("Hello ");
})

app.listen(port,()=>{
   // console.log("Server is running in Port:" + port)
    console.log(`Server is running in Port: ${port}`)
})