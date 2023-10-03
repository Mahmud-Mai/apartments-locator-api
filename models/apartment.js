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
  neighbourhood: {
    type: String,
    enum: ["Zaria", "Samaru", "Dogon Itche", "Zango"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
  mapsCoordinates: {
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
