import { Schema, model } from "mongoose";

const apartmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  address: {
    type: String,
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
  images: [String],
  mapCoordinates: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Apartment = model("Apartment", apartmentSchema);

export default Apartment;
