var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var semesterSchema = new Schema({
  startDate: { type: Date, require: true },
  endDate: { type: Date, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Semester", semesterSchema);
