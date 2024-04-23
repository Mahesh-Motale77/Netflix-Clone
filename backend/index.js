// Step 1 : Creating a server

import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"
import cors from "cors";


dotenv.config({
    path: ".env"
})

const app = express();
// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:`http://localhost:3000`,
    credentials:true,
}
app.use(cors(corsOptions));

//api
app.use("/api/v1/user",userRoute)
// http://localhost:8080/api/v1/user/register

app.listen(process.env.PORT, ()=>{
    databaseConnection();
    console.log(`server listen at port ${process.env.PORT}`)
})