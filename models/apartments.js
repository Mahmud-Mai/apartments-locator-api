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
    enum: ["Danraka", "Samaru", "Dogon Itche", "Zango", "Zaria"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [String],
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
});

const Apartment = model("Apartment", apartmentSchema);

export default Apartment;
