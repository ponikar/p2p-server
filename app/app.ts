import express from "express";
import { connectDB } from "./config/db";
import bodyParser from "body-parser";
import { Server, Socket } from "socket.io";
import http from "http";
import cors from "cors";
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

connectDB();
app.use(bodyParser.json());
app.use(cors());

server.listen(process.env.PORT || 3000, () => {
  console.log("The application is listening on port 8085!");
});

export const onSocketConnection = (callback: (socket: Socket) => void) => {
  io.on("connection", (socket) => {
    callback(socket);
  });
};
export { app, io };
