const express=require('express');
const  mongoose = require('mongoose');



const app=express();


//connection to mongodb
mongoose.connect("mongodb://localhost/todoDB",{useUnifiedTopology:true,useNewUrlParser:true});

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs")




//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

//server config
app.listen(3000,()=>console.log("server started on 3000"))