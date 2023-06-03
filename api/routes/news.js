import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getNews,
  updateNews,
} from "../controllers/newsController.js";
import { isAdmin } from "../utils/verifyToken.js";

// import { createError } from "../utils/error.js";
const router = express.Router();
// crud operations

// this is the create function

router.post("/register", createNews);

/// this is the update function

router.put("/:id", isAdmin, updateNews);

/// this is the delete function

router.delete("/:id", isAdmin, deleteNews);

// Get one hotel function

router.get("/find/:id", getNews);
router.get("/:id", getNews);

// Get all hotels

router.get("/", getAllNews);

export default router;
