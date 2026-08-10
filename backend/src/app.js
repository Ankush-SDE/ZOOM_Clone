import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";

import {connectToSocket} from "./controllers/socketManager.js";
import cors from "cors";

const app = express();
const server = createServer(app);
const io =connectToSocket(server);


app.set("port",(process.env.PORT || 8000))

app.get("/home",(req,res)=>{

  return res.json({"hello":"world"})
});
const start = async()=>{
const connectionDb = await mongoose.connect("mongodb+srv://<ankush1524kumar_db_user>:GOiHHxdzi3lCQwyV@cluster0.z5wfkul.mongodb.net/")

console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`)
  server.listen(app.get("port"),()=>{
    console.log("LISTENIN ON PORT 8000")
  });


};
start();