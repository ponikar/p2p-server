import { Socket } from "socket.io";
import { app, io, onSocketConnection } from "./app/app";
import { roomRouter } from "./app/routes/rooms.routes";

onSocketConnection((socket: Socket) => {
  socket.on("user-joined", (e) => {
    const { meetingId } = JSON.parse(e);
    socket.broadcast.emit(`room-${meetingId}`, e);
  });
});

app.use("/", roomRouter);
