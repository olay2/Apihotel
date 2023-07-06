const addressModel = require('../model/addressModel');
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const nodemailer = require('nodemailer');

module.exports = {
    getListProvince: (req, res) => {

        addressModel.getListProvince().then(result=>{

            console.log(result);
            res.json({ status: 200, data: result});
        })  
    },
    getListDistrict: (req, res) => {

        addressModel.getListDistrict().then(result=>{

            console.log(result);
            res.json({ status: 200, data: result});
        })  
    },
    getListVillage: (req, res) => {

        addressModel.getListVillage().then(result=>{

            console.log(result);
            res.json({ status: 200, data: result});
        })  
    },
};