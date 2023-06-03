import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    featured: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
