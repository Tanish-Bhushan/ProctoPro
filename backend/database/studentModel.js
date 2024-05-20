const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  student_name: { type: String },
  student_email: { type: String },
  student_location: { type: String },
  student_password: { type: String },
  
});

const studentModel = mongoose.model("studentDetails", studentSchema);

module.exports = studentModel;
