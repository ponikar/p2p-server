import express from "express";
import { connectDB } from "./config/db";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

connectDB();
app.use(bodyParser.json());

server.listen(8085, () => {
  console.log("The application is listening on port 8085!");
});

export const onSocketConnection = (callback: any) => {
  io.on("connection", (socket) => {
    callback(socket);
  });
};
export { app, io };
