var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true, min: 0, max: 100 },
  grade: { type: Number, min: 0, max: 100 },
  date: { type: Date, default: new Date() },
  notes: { type: String },
});

module.exports = mongoose.model("Item", itemSchema);
