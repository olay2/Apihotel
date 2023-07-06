const express=require("express");
const Route= express.Router();

const usersRoute=require('./routers/usersRouter')
const roomsRoute=require('./routers/roomsRouter')
const addressRouter=require('./routers/addressRouter')

Route.use("/",usersRoute);
Route.use("/",roomsRoute);
Route.use("/",addressRouter);


module.exports=Route;