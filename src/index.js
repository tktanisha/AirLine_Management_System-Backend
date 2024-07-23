//importing cjs module--
const {port}=require('./config/severConfig');
const express=require("express")
const bodyParser=require('body-parser')

console.log(port);
const startAndSetupServer= async()=>{

    //setting bup express object
    const app=express();
    // const port=3000;--in env file
    

    //setting up body parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    app.listen(port,()=>{
       // console.log(process.env);
        console.log(`Server is running on port ${port}`);
      //  console.log(process.env.PORT);
    });
}

startAndSetupServer();