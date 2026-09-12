import { Student } from "../../model/student-schema.js";
async function edit(req, res) {
    try {
        const studentdata = req.body
        const { id } = req.params;
        const student = await Student.findById(id);
        student.class = studentdata.class;
        student.section = studentdata.section;
        student.admno = studentdata.admno;
         await student.save();
      

        return res.status(201).json({
            message: " Student Updated successfuly"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export default edit;