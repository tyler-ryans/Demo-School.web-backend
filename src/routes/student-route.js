import { Router } from "express";
import addnewstudent from "../controllers/students/addnewstudent-api.js";
import getallstudents from "../controllers/students/get-all-students-api.js";
import edit from "../controllers/students/Edit-api.js";
import deletetion from "../controllers/students/deletestudent-api.js";

const studentroute = Router();
studentroute.post("/add-new-student", addnewstudent);
studentroute.get("/all-students", getallstudents);
studentroute.post("/edit-student/:id",edit );
studentroute.delete("/delete-student/:id",deletetion )
export default studentroute;