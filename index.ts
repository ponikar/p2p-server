import { Socket } from "socket.io";
import { app, io, onSocketConnection } from "./app/app";
import { roomRouter } from "./app/routes/rooms.routes";
import path from "path";
import express from "express";
onSocketConnection((socket: Socket) => {
  socket.on("user-joined", (e) => {
    const { meetingId, type } = JSON.parse(e);
    console.log(type);
    socket.broadcast.emit(`room-${meetingId}`, e);
  });
});

app.use(
  "/assets",
  express.static(path.join(__dirname, "../p2p-client/dist/assets"))
);
app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "../p2p-client/dist/index.html"));
});

app.use("/", roomRouter);
