import { Router } from "express";
import {
  getAllApartments,
  createApartment,
  getApartmentById,
  updateApartment,
  deleteApartment,
} from "../controllers/apartments.js";
import validateApartment from "../utils/validateApartment.js";

const router = Router();

router.route("/").get(getAllApartments);
router.route("/").post(validateApartment, createApartment);
router.route("/:id").get(getApartmentById);
router.route("/:id").put(validateApartment, updateApartment);
router.route("/:id").delete(deleteApartment);

export default router;
