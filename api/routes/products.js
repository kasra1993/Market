import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "../controllers/productController.js";
// import { isAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// crud operations

router.post("/register", createProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);
router.get("/:productId", getProduct);
router.get("/", getProducts);

export default router;
