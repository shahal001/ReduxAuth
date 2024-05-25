const User = require("../Model/UserModel"); //schema ne edukkumbom first letter capital write cheyyanam

//post signup

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body; //front endile ninnu varuna user data (req.body) yil undavum atine [destructure cheyyum req.body]

    const userExist = await User.findOne({ email });

    if (userExist) {
      console.log("user already exist");
    }

    const user = await User.create({ name, email, password });
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
  }
};

//login
const login = (req, res) => {
  res.send("hi");
};

module.exports = { signup, login };
