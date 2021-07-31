
import { Socket } from "socket.io";
import { app, io, onSocketConnection } from "./app/app";
import { roomRouter } from "./app/routes/rooms.routes";


onSocketConnection((socket : Socket) => {
    console.log("LOOKS LIKE SOMEONE JOINED THE MEETING")
    socket.on("user-joined", (e) => {
        console.log("I got meessage for him!", e);
    })
});


app.use("/", roomRouter);