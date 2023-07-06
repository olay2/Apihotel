const { Result } = require('express-validator');
const conn = require('../config/db');
module.exports = {
    //ສະແດງແຂວງ
    getListProvince: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM tb_province", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ສະແດງເມືອງ
    getListDistrict: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM tb_district", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    //ສະແດງບ້ານ
    getListVillage: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM tb_village", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
};