import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserById);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

export default router;
