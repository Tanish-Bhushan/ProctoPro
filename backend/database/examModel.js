const mongoose = require("mongoose");

const examSchema = mongoose.Schema({
  examId: { type: Number },
  institute: { type: String },
  questions: [[String]],
});

const examModel = mongoose.model("examDetails", examSchema);

module.exports = examModel;
