import { NextFunction, Request, Response } from "express";
import {
  handleErroResponse,
  handleNotFound,
} from "../../../helpers/response.helpers";
import { Room } from "../../Models/room.model";

export const getRoomById = async (
  req: Request,
  res: Response,
  next: NextFunction,
  meetingid: string
) => {
  try {
    const room = await Room.findOne({ meetingid });
    req.body.room = room;
    if (room) return next();

    return handleNotFound(res, "Room");
  } catch (e) {
    return handleErroResponse(res, e);
  }
};
