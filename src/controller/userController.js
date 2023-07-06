const userModel = require("../model/userModel");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const nodemailer = require('nodemailer');

module.exports = {
  //ສະແດງຜູ້ໃຊ້
  getListUser: (req, res) => {
    userModel.getUserList().then((result) => {
      console.log(result);

      res.json({ status: 200, data: result });
    });
  },
  //ສະແດງປະເພດຜູ້ໃຊ້
  getListUserType: (req, res) => {
    userModel.getListUserType().then((result) => {
      console.log(result);

      res.json({ status: 200, data: result });
    });
  },
  //ເຂົົ້າສູ່ລະບົບ
  login: (req, res) => {
    var { email, password } = req.body;
    userModel.login(email).then((result) => {
      if (result[0].length > 0) {
        var pwd = result[0][0].password;
        var passwordCompare = bcrypt.compareSync(password, pwd);
        if (passwordCompare) {
          res.json({ status: 200, success: "true", message: "login success" });
        } else {
          res.json({ status: 401, success: "false", message: "login fail" });
        }
      }
    });
  },
  //ລົງທະບຽນຜູ້ໃຊ້
  register: (req, res) => {
    var {
      fnam,
      lnam,
      sex,
      bod,
      tel,
      email,
      password,
      idcard,
      village,
      district,
      province,
      userType,
    } = req.body;

    var pwd = bcrypt.hashSync(password, 10);

    userModel
      .register(
        fnam,
        lnam,
        sex,
        bod,
        tel,
        email,
        pwd,
        idcard,
        village,
        district,
        province,
        userType
      )
      .then((result) => {
        console.log(result[0]);
        if (result[0][0].oResult === "Y") {
          res.json({ status: 200, success: "true", message: "ລົງທະບຽນສຳເລັດ" });
        } else {
          res.json({
            status: 405,
            success: "false",
            message: "ລົງທະບຽນບໍ່ສຳເລັດ",
          });
        }
      });
  },
  //ແກ້ໄຂຜູ້ໃຊ້
  updateUser: (req, res) => {
    var {
      userId, fnam, lnam, sex, bod, tel, email, password, idcard, village, district, province, userType
    } = req.body;

    var pwd = bcrypt.hashSync(password, 10);

    userModel.updateUser(
      userId, fnam, lnam, sex, bod, tel, email, pwd, idcard, village, district, province, userType
      )
      .then((result) => {
        console.log(result[0]);
        if (result[0][0].oResult === "Y") {
          res.json({ status: 200, success: "true", message: "ແກ້ໄຂສຳເລັດ" });
        } else {
          res.json({
            status: 405,
            success: "false",
            message: "ແກ້ໄຂບໍ່ສຳເລັດ",
          });
        }
      });
  },
  //ລົບຜູ້ໃຊ້
  deleteUser: (req, res) => {
    var {
      ID
    } = req.body;
    userModel.deleteUser(
      ID
      )
      .then((result) => {
        console.log(result[0]);
        if (result[0][0].oResult === "Y") {
          res.json({ status: 200, success: "true", message: "ລົບສຳເລັດ" });
        } else {
          res.json({
            status: 405,
            success: "false",
            message: "ລົບບໍ່ສຳເລັດ",
          });
        }
      });
  },
  
};
