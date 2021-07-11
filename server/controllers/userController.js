const User = require("../models/user");
const bcrypt = require("bcrypt");
const env = process.env.NODE_ENV;
const jwtExpires = process.env.jwtExpires;
const cookieOptions = {
  expires: new Date(Date.now() + jwtExpires),
  secure: env !== "dev",
  httpOnly: env !== "dev",
};

exports.signup = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body)

    //checking if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "user already registred" });

    //creating and registering new user
    ////////////////hashing password

    user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 12);
    ///////////////saving user
    const result = await user.save();

    if (result) {
      //sending token in a cookie
      res.cookie("token", user.generateAuthToken(), cookieOptions);
      res.cookie("refreshToken", user.generateRefreshToken(), cookieOptions);

      return res.status(201).json({
        user: { ...result._doc, password: undefined },
      });
    }
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //checking if user exists
    let user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });
    //checking password
    const result = await user.comparePwd(password);
    if (!result)
      return res.status(400).json({ error: "Invalid email or password" });
    //generating jwt
    const token = user.generateAuthToken();
    //sending token in a cookie
    res.cookie("token", token, cookieOptions);
    res.cookie("refreshToken", user.generateRefreshToken(), cookieOptions);

    return res
      .header("x-auth-token", token)
      .json({ user: { ...user._doc, password: undefined } });
      
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message });
  }
};
