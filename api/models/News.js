import mongoose from "mongoose";
const newsSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortdesc: {
    type: String,
    required: true,
  },
  longdesc: {
    type: String,
    required: true,
  },
});
export default mongoose.model("News", newsSchema);
