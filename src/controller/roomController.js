const roomModel = require("../model/roomModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const nodemailer = require('nodemailer');

module.exports = {
  //ສະແດງຫ້ອງ
  getListRoom: (req, res) => {
    roomModel.getRoomList().then((result) => {
      console.log(result);
      res.json({ status: 200, data: result });
    });
  },
  //ສະແດງປະເພດຫ້ອງ
  getListRoomtype: (req, res) => {
    roomModel.getListRoomtype().then((result) => {
      console.log(result);
      res.json({ status: 200, data: result });
    });
  },
  //ເພີ່ມຫ້ອງ
  addroom: (req, res) => {
    var { name, status, RoomType_id, Price, Booking_deposit } = req.body;

    roomModel.addroom(name, status, RoomType_id, Price, Booking_deposit).then((result) => {
      console.log(result[0]);
      if (result[0][0].oResult === "Y") {
        res.json({ status: 200, success: "true", message: "ເພີ່ມຫ້ອງສຳເລັດ" });
      } else {
        res.json({
          status: 405,
          success: "false",
          message: "ເພີ່ມຫ້ອງບໍ່ສຳເລັດ",
        });
      }
    });
  },
  //ແກ້ໄຂຫ້ອງ
  updateroom: (req, res) => {
    var { roomID, name, status, RoomType_id, Price, Booking_deposit} = req.body;

    roomModel.updateroom(roomID, name, status, RoomType_id, Price, Booking_deposit).then((result) => {
      console.log(result[0]);
      if (result[0][0].oResult === "Y") {
        res.json({ status: 200, success: "true", message: "ແກ້ໄຂສຳເລັດ" });
      } else {
        res.json({
          status: 405,
          success: "false",
          message: "ເແກ້ໄຂບໍ່ສຳເລັດ",
        });
      }
    });
  },
  //ລົບຫ້ອງ
  deleteroom: (req, res) => {
    var { roomID } = req.body;

    roomModel.deleteroom(roomID).then((result) => {
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
