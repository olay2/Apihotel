const express=require("express");
const Route= express.Router();
const userController=require('../controller/userController');

Route.get('/api/listuser',userController.getListUser);
Route.get('/api/listuserType',userController.getListUserType);
Route.post('/api/login',userController.login);
Route.post('/api/register',userController.register);
Route.post('/api/updateUser',userController.updateUser);
Route.delete('/api/deleteUser',userController.deleteUser);

module.exports=Route