import { model, Schema } from "mongoose";

const StringField = {
  type: String,
  required: true,
};

const roomSchema = new Schema({
  hostid: StringField,
  meetingid: StringField,
});

export const Room = model("rooms", roomSchema);
