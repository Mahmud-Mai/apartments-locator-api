import { Router } from "express";
import {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms.js";
import validateRoom from "../utils/validateRoom.js";

const router = Router();

router.route("/").get(getAllRooms);
router.route("/").post(validateRoom, createRoom);
router.route("/:id").get(getRoomById);
router.route("/:id").put(validateRoom, updateRoom);
router.route("/:id").delete(deleteRoom);

export default router;
