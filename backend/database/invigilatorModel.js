const mongoose = require("mongoose");

const invigilatorSchema = mongoose.Schema({
  invigilator_name: { type: String },
  invigilator_email: { type: String },
  invigilator_institute: { type: String },
  invigilator_password: { type: String },
 
});

const invigilatorModel = mongoose.model("invigilatorDetails", invigilatorSchema);

module.exports = invigilatorModel;
