var mongoose = require("mongoose");
require("mongoose-type-email");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true },
  username: { type: String, required: true, minlength: 6, maxlength: 20 },
  password: { type: String, required: true },
});

userSchema.virtual("fullName").get(function () {
    return this.lastName + ", " + this.lastName;
});

module.exports = mongoose.model("User", userSchema);
