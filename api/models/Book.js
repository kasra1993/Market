import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  bookType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  time: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "6"],
    required: true,
  },
  taken: {
    type: Boolean,

    default: false,
  },
  username: {
    type: String,
    required: true,
  },
  userid: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Book", bookSchema);
// enum: ['KG', 'liters', 'meters', 'cm'],
// units: {
//   type: String,
//   enum: ['KG', 'liters', 'meters', 'cm'],
//   required : true
// }
