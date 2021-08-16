const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT|| 4000; 
 const app = express();
 const cors = require("cors")
//  const url =""

//  const app = express();

//  mongoose.connect(url, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewurlParse :true,
//     useUnifiedTopology : true,
//     })
//     .then(() =>{
//         console.log("Database is now connected, successfully");
//     });
    
    app.use(cors());
    app.use(express.json());
    app.get("/" , async (req,res) =>{
      res.status(200).send ("connect successfully") 
    });
    
    
    
    app.listen(port, () =>{
        console.log(`server is now connected ${port}`)
    });