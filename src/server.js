import express from "express";
import dbconnection from "./config/dbconfig.js";
import studentroute from "./routes/student-route.js";
import cors from "cors";
const app = express();

dbconnection();
app.use(cors());
app.use(express.json());
app.use("/student", studentroute);
app.listen(9000, ()=>{
    console.log("server is running at http://localhost:9000")
});