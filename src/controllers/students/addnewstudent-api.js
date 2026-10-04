import { Student } from "../../model/student-schema.js";

async function addnewstudent(req,res){
try {
    const studentdata = req.body;
    const newstudent = new Student(studentdata);
    console.log (studentdata)
    await newstudent.save();
    return res.status(201).json({
        message:"New Student Registered successfuly"
    })
} catch (error) {
    return res.status(500).json({
        message:"Internal Server Error"
    })
}
}
export default addnewstudent;