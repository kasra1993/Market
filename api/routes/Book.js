import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/bookController.js";
import { isAdmin } from "../utils/verifyToken.js";

// import { createError } from "../utils/error.js";
const router = express.Router();
// crud operations

// this is the create function

router.post("/register", createBook);

/// this is the update function

router.put("/:id", isAdmin, updateBook);

/// this is the delete function

router.delete("/:id", isAdmin, deleteBook);

// Get one hotel function

router.get("/find/:id", getBook);
router.get("/:id", getBook);

// Get all hotels

router.get("/", getAllBooks);

export default router;
