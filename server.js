const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname,"..","public")));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,"public")));

app.post("/contact",(req,res)=>{
    const formData = req.body;
    console.log(formData);
    res.status(200).json({success: true})
})

app.use((req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"public","index.html"));
})
app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`);
})