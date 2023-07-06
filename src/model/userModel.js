const { Result } = require('express-validator');
const conn = require('../config/db');
module.exports = {
    //get all user from register list
    getUserList: () => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_LISTUSER", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    getListUserType: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM user_type", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    login: (email,password) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_LOGIN(?)",[email], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    register: (fnam,lnam,sex,bod,tel,email,password,idcard,village,district,province,userType) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_REGISTER(?,?,?,?,?,?,?,?,?,?,?,?)",[fnam,lnam,sex,bod,tel,email,password,idcard,village,district,province,userType], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateUser: (userId,fnam,lnam,sex,bod,tel,email,password,idcard,village,district,province,userType) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_UPDATEUSER(?,?,?,?,?,?,?,?,?,?,?,?,?)",[userId,fnam,lnam,sex,bod,tel,email,password,idcard,village,district,province,userType], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    deleteUser: (ID) => {
        return new Promise((resolve, reject) => {
            conn.query("CALL SP_DELETEUSER(?)",[ID], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    
    

    
};