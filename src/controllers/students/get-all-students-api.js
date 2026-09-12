import { Student } from "../../model/student-schema.js"

 const getallstudents = async(req , res)=>{
    try {
        const allstudents = await Student.find();
        return res.status(200).json({
            message:"Student fetched successfully",
            status:200,
            students:allstudents
        })
    } catch (error) {
        console.log("error")
    }
 }

 export default getallstudents;