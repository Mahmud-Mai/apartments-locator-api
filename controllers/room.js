import Room from "../models/rooms.js";

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate("apartment");
    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, error: error });
  }
};

export const createRoom = async (req, res) => {
  const { name, type, description, apartment } = req.body;

  const newRoom = new Room({
    name,
    type,
    description,
    apartment,
  });

  try {
    // Check if a room with the same name already exists in the apartment
    const existingRoom = await Room.findOne({ name, apartment });
    if (existingRoom) {
      return res.status(400).json({
        message: "Room with the same name already exists in the apartment",
      });
    }
    await newRoom.save();
    res.status(201).json({ message: "Room created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const getRoomById = async (req, res) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id).populate("apartment");
    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    res.status(200).json({ room });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const updateRoom = async (req, res) => {
  const { id } = req.params;
  const { name, type, description, apartment } = req.body;

  try {
    const room = await Room.findById(id);
    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    room.name = name;
    room.type = type;
    room.description = description;
    room.apartment = apartment;

    await room.save();
    res.status(200).json({ message: "Room updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

export const deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id);
    if (!room) {
      res.status(404).json({ message: "Room not found" });
      return;
    }

    await room.remove();
    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};
