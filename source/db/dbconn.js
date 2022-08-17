const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-Data",{
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connecttion established");
}).catch((err)=>{
  console.log(err);
})