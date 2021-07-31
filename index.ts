
import { app, io, onSocketConnection } from "./app/app";
import { roomRouter } from "./app/routes/rooms.routes";


onSocketConnection((socket :unknown) => {
    console.log("I got something from socket", socket)
});


app.use("/", roomRouter);