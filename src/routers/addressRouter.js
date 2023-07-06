const express=require("express");
const Route= express.Router();
const addressController=require('../controller/addressController');


Route.get('/api/listprovince',addressController.getListProvince);
Route.get('/api/listdistrict',addressController.getListDistrict);
Route.get('/api/listvillage',addressController.getListVillage);

module.exports=Route;