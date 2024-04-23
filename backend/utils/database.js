import mongoose from "mongoose";
import dotenv from  "dotenv";

dotenv.config({
    path:"./.env"
})

// const databaseConnection = () => {
//     mongoose.connect(process.env.MONGO_URI).then(()=>{
//         console.log("mongodb connected successfully");
//     }).catch((error)=>{
//         console.error("Error connecting to MongoDB:", error);
//     })
// };


const databaseConnection = async() =>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("mongodb connected");
    } catch (error) {
        console.log("error",error);
    }
}
export default databaseConnection;