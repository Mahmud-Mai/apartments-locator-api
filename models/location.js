import { Schema, model } from "mongoose";

const locationSchema = new Schema({
  name: {
    _id: fafsd,
    type: String,
    enum: ["Zaria", "Samaru", "Dogon Itche", "Zango"],
    required: true,
  },
});

const Location = new model("Location", locationSchema);
export default Location;
