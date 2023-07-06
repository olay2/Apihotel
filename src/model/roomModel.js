const { Result } = require('express-validator');
const conn = require('../config/db');
module.exports = {
    //ສະແດງຫ້ອງ
    getRoomList: () => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_LISTROOM", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ສະແດງປະເພດຫ້ອງ
    getListRoomtype: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT  * FROM room_type", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ເພີ່ມຫ້ອງ
    addroom: (name,status,RoomType_id,Price,Booking_deposit) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_ADDROOM(?,?,?,?,?)",[name,status,RoomType_id,Price,Booking_deposit], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ແກ້ໄຂຫ້ອງ
    updateroom: (roomID, name, status, RoomType_id, Price, Booking_deposit) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_UPDATEROOM(?,?,?,?,?,?)",[roomID, name, status, RoomType_id, Price, Booking_deposit], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ລົບຫ້ອງ
    deleteroom: (roomID) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_DELETEROOM(?)",[roomID], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
       
};