import mongoose from "mongoose";

async function dbconnection(){
    try {
       await mongoose.connect('mongodb+srv://ryanstyler90_db_user:zzzwwcSp3A3OIMCG@cluster0.wpp2k7l.mongodb.net/?appName=Cluster0');
        console.log("database connected succesfully");
    } catch (error) {
        console.log("database connection error",error.message);
    }
}
export default dbconnection;
//zzzwwcSp3A3OIMCG