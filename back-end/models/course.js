var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var courseSchema = new Schema({
  name: { type: String, required: true },
  numCredit: { type: Number, required: true, min: 1, max: 10 },
  grade: { type: Number, min: 0, max: 100 },
  semester: { type: Schema.Types.ObjectId, ref: "Semester" },
  components: [{ type: Schema.Types.ObjectId, ref: "Component" }],
});

courseSchema.virtual("letter").get(function () {
    if (this.grade >= 90) {
        return "A+";
    } else if (this.grade >= 85) {
        return "A";
    } else if (this.grade >= 80) {
        return "A-";
    } else if (this.grade >= 76 ) {
        return "B+";
    } else if (this.grade >= 72) {
        return "B";
    } else if (this.grade >= 68) {
        return "B-";
    } else if (this.grade >= 64) {
        return "C+";
    } else if (this.grade >= 60) {
        return "C";
    } else if (this.grade >= 55) {
        return "C-";
    } else if (this.grade >= 50) {
        return "D";
    } else {
        return "F";
    }
});

module.exports = mongoose.model("Course", courseSchema);
