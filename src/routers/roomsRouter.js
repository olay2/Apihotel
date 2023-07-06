const express=require("express");
const Route= express.Router();
const roomController=require('../controller/roomController');


Route.get('/api/listroom',roomController.getListRoom);
Route.get('/api/listroomtype',roomController.getListRoomtype);
Route.post('/api/addroom',roomController.addroom);
Route.post('/api/updateroom',roomController.updateroom);
Route.delete('/api/deleteroom',roomController.deleteroom);

module.exports=Route;