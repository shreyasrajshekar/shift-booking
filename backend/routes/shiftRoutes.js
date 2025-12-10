import express from "express";
import { getShifts, bookShift, cancelShift } from "../controllers/shiftcontroller.js";

const router = express.Router();

router.get("/", getShifts);
router.post("/book/:id", bookShift);
router.post("/cancel/:id", cancelShift);

export default router;
