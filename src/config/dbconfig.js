import mongoose from "mongoose";

async function dbconnection(){
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/vedantdatabase');
        console.log("database connected succesfully");
    } catch (error) {
        console.log("database connection error");
    }
}
export default dbconnection;