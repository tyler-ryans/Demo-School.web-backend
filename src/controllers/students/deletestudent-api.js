import { Student } from "../../model/student-schema.js";
async function deletetion(req, res) {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        return res.status(201).json({
            message: " Student Deleted from Rolls Successfuly"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }



}
export default deletetion