import { Schema, model } from "mongoose";

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  type: {
    type: String,
    enum: [
      "1 bedroom with kitchen only",
      "1 bedroom self-contained",
      "2 bedroom with shared kitchen and toilet",
      "2 bedroom with living room",
      "2 bedroom without living room",
    ],
    required: true,
  },
  apartment: {
    type: Schema.Types.ObjectId,
    ref: "Apartment",
    required: true,
  },
});
const Room = new model("Room", roomSchema);
export default Room;
