import express from "express";
import { connectDB } from "./app/config/db";
import bodyParser from "body-parser";
import { Server } from "socket.io";
import http from "http";
const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("User A connected");
})

app.use(bodyParser.json());
connectDB();
app.get("/", (req, res) => {
  res.send("Well done!");
});
server.listen(8085, () => {
  console.log("The application is listening on port 8085!");
});
