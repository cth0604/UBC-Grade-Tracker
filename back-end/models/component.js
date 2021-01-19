var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var componentSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true, min: 0, max: 100 },
  grade: { type: Number, min: 0, max: 100 },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("Component", componentSchema);
