import Apartment from "../models/apartments.js";

export const getAllApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, error: error });
  }
};

export const createApartment = async (req, res) => {
  const { name, description, address, neighbourhood, price, images, type } =
    req.body;
  const newApartment = new Apartment({
    name,
    description,
    address,
    neighbourhood,
    price,
    images,
    type,
  });

  try {
    // Check if an apartment with the same name already exists
    const existingApartment = await Apartment.findOne({ name });
    if (existingApartment) {
      return res
        .status(400)
        .json({ message: "Apartment with the same name already exists" });
    }
    await newApartment.save();
    res.status(201).json({ message: "Apartment created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const getApartmentById = async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findById(id);
    if (!apartment) {
      res.status(404).json({ message: "Apartment not found" });
      return;
    }

    res.status(200).json({ apartment });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const updateApartment = async (req, res) => {
  const { id } = req.params;
  const { name, description, address, neighbourhood, price, images, type } =
    req.body;

  try {
    const apartment = await Apartment.findById(id);
    if (!apartment) {
      res.status(404).json({ message: error.message, error: error });
      return;
    }

    apartment.name = name;
    apartment.description = description;
    apartment.address = address;
    apartment.neighbourhood = neighbourhood;
    apartment.price = price;
    apartment.images = images;
    apartment.type = type;

    await apartment.save();
    res.status(200).json({ message: "Apartment updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const deleteApartment = async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findById(id);
    if (!apartment) {
      res.status(404).json({ message: "Apartment not found" });
      return;
    }

    await apartment.remove();
    res.status(200).json({ message: "Apartment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
