const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/user"
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabse;
