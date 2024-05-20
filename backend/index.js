const express = require("express");
const app = express();
const connectDB = require("./database/connect");
const cors = require("cors");
const studentModel = require("./database/studentModel");
const invigilatorModel = require("./database/invigilatorModel");
const examModel = require("./database/examModel");
const jwt = require("jsonwebtoken");
connectDB();
app.use(cors());
app.use(express.json());

app.post("/studentRegister", async (req, res) => {
  const { email } = req.body;
  const e_mail = await studentModel.findOne({ student_email: email });
  if (e_mail) {
    return res.json({ message: "300" });
  }
  const student = new studentModel();
  student.student_name = req.body.name;
  student.student_email = req.body.email;
  student.student_institute = req.body.institute;
  student.student_password = req.body.password;
  await student.save();
  res.json({ message: "Account created successfully" });
});

app.post("/invigilatorRegister", async (req, res) => {
  const { email } = req.body;
  const e_mail = await invigilatorModel.findOne({ invigilator_email: email });
  if (e_mail) {
    return res.json({ message: "300" });
  }
  const student = new invigilatorModel();
  student.invigilator_name = req.body.name;
  student.invigilator_email = req.body.email;
  student.invigilator_institute = req.body.institute;
  student.invigilator_password = req.body.password;
  await student.save();
  res.json({ message: "Account created successfully" });
});

app.post("/studentLogin", async (req, res) => {
  const { email } = req.body;
  const e_mail = await studentModel.findOne({ student_email: email });
  if (!e_mail) {
    return res.json({ message: "300" });
  }
  if (e_mail.student_password !== req.body.password) {
    return res.json({ message: "301" });
  }

  const token = jwt.sign({ id: e_mail._id }, "secret");
  res.json({ token, studentID: e_mail._id });
});

app.post("/invigilatorLogin", async (req, res) => {
  const { email } = req.body;
  const e_mail = await invigilatorModel.findOne({ invigilator_email: email });
  if (!e_mail) {
    return res.json({ message: "300" });
  }
  if (e_mail.invigilator_password !== req.body.password) {
    return res.json({ message: "301" });
  }

  res.json({ message: "LoggedIn successfully" });
});

app.post("/createExam", async (req, res) => {
  const { institute } = req.body;
  const exam = new examModel();
  exam.institute = institute;
  exam.examId = (await examModel.find().count()) + 1;
  await exam.save();
  res.json({ message: exam.examId });
});

app.post("/addQuestions", async (req, res) => {
  const { questions, id } = req.body;
  const resq = await examModel.updateOne(
    { examId: id },
    { $set: { questions: questions } }
  );
  res.json({ message: 301 });
});

app.post("/getQuestions", async (req, res) => {
  res.json({ message: await examModel.find().sort({ examId: -1 }) });
});

app.listen(8000, () => {
  console.log("Server is Live...");
});
