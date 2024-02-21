const model = require("../config/models/define_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const controller = {};

controller.login = async (req, res) => {
  const {
    npm,
    password
  } = req.body;

  const user = await model.user.findOne({
    where: {
      ID: npm,
    }
  });
  if (!user) {
    res.status(404).json({
      status: res.statusCode,
      message: "NPM not found",
    });
  } else {
    // const passwordValid = await bcrypt.compare(password, user.Pwd); //Using Bcrypt
    const passwordValid = password === user.ID; //Normal

    if (!passwordValid) {
      res.status(400).json({
        status: res.statusCode,
        message: "Invalid password"
      });
    } else {
      const token = jwt.sign({
          npm: user.ID,
          fname: user.FName,
          lname: user.LName,
        },
        process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXP,
          noTimestamp: true,
        }
      );

      // res.header("Authorization", token);
      res.status(200).json({
        status: res.statusCode,
        message: "Login Sucess",
        token: token,
        user
      });
    }
  }
};

controller.logout = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized: No token provided',
    });
  }

  res.status(200).json({
    status: res.statusCode,
    message: 'Logout successful'
  });

};


module.exports = controller;