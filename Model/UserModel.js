const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name!"],
    },
    email: {
      type: String,
      required: [true, "Enter your Email!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter the password!"],
    },
  },
  {
    timestamps: true, //data databasile keriya samayavum pinne datayl endeelum update cheytitundankilum atinte time kaanikum
  }
);

//bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("newUser", userSchema); //(user) ennal collection name annu,ennite [mongoose.model] koode export cheyyum
