//common js moduling and configuration
const dotenv=require('dotenv')
dotenv.config();
console.log(process.env.PORT)
module.exports={
    port:process.env.PORT
}
