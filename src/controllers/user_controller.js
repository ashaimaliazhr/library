const model = require("../config/models/define_model");
const bcrypt = require("bcrypt");

const controller = {};

controller.getUser = async (req, res) => {
  const { npm } = req.body;
  try {
    const user = await model.user.findOne({ where: { ID: npm } });
    if (!user) {
      res.status(400).json({
        status: res.statusCode,
        message: "Data Not Found",
      });
    } else {
      res.status(200).json({
        message: "Succes Get User",
        data: user,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

controller.getSingleUser = async (req, res) => {
  const { npm } = req.params;
  try {
    const user = await model.user.findOne({ where: { ID: npm } });
    if (!user) {
      res.status(402).json({
        message: "Data Not Found",
      });
    } else {
      res.status(200).json({
        message: "Success Get User",
        data: user,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

controller.getAllUser = async (req, res) => {
    try {
        const allUsers = await model.user.findAll();
        if (!allUsers || allUsers.length === 0) {
            res.status(404).json({
                message: "No Users Found",
            });
        }else {
            res.status(200).json({
                message: "Success Get All Users",
                data: allUsers,
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

controller.updateUser = async (req, res) => {
  const { addr, phone, email } = req.body;
  const { npm } = req.params;
  try {
    const user = await model.user.update(
      {
        Addr: addr,
        Email: email,
        Phone: phone,
      },
      {
        where: {
          ID: npm,
        },
      }
    );
    if (user[0] === 0) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        status: res.statusCode,
        message: "Update success",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = controller;
