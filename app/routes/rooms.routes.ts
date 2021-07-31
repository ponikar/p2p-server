import { Router } from "express";
import { createRoom, findRoom } from "../controllers/room/room.controller";
import { getRoomById } from "../middlewares/models/room.middleware";

const roomRouter = Router();

roomRouter.param("meetingid", getRoomById);
roomRouter.get("/create-room", createRoom);
roomRouter.get("/find-room/:meetingid", findRoom);

export { roomRouter };
