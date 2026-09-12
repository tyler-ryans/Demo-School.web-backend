import { model, Schema } from "mongoose";

const studentschema = Schema({
    studentName: String,
    admno: String,
    class: String,
    section: String,
    dob: String,
    parentName: String,
});
export const Student = model("students", studentschema); 