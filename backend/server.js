const e = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const mongoUrl="mongodb+srv://patkayembe5:Pat0409e@cluster0.lszf1fi.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))



app.listen(5000, ()=> {
    console.log("server started");
});

app.post("/post", async (req, res) => {
    console.log(req.body);
    const {data}=req.body;

    try {
        if(data=="publier"){
            res.send({status:"ok"})
        }else{
            res.send({status:"user not found"});
        }
        
    } catch (error) {
       res.send({status:"something went wrong try again" }) 
    }
   
});