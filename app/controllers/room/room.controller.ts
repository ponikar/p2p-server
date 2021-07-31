import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { handleErroResponse } from "../../../helpers/response.helpers";
import { Room } from "../../Models/room.model";

interface createRoomReqType {
    uid: string;
}

export const createRoom = async (
  req: Request<null, null, createRoomReqType>,
  res: Response
) => {
  try {
    const { uid } = req.body;
    const room = new Room({
        hostid: uid,
        meetingid: `${nanoid(3)}-${nanoid(3)}-${nanoid(3)}`.toLowerCase()
    });
    const data = await room.save();
    return res.send(data);
  } catch (e) {
    return handleErroResponse(res, e);
  }
};


export const findRoom = (req :Request, res: Response) => {
    return res.send(req.body.room);
}