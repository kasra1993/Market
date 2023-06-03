import News from "../models/News.js";

export const createNews = async (req, res, next) => {
  try {
    const News = await News.create({ ...req.body });
    // const savedNews = await newNews.save();
    //   console.log(newNews);
    res.status(200).json(News);
  } catch (error) {
    next(error);
  }
};
export const updateNews = async (req, res, next) => {
  const { id: NewsId } = req.params;

  try {
    const updatedNews = await News.findByIdAndUpdate(
      NewsId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedNews);
  } catch (error) {
    next(error);
  }
};
export const deleteNews = async (req, res, next) => {
  const { id: NewsId } = req.params;
  try {
    const deletedItem = await News.findByIdAndDelete(NewsId);
    res.status(200).json("deletion successful");
  } catch (error) {
    next(error);
  }
};
export const getNews = async (req, res, next) => {
  const { id } = req.params;

  try {
    const News = await News.findById(id);
    res.status(200).json(News);
  } catch (error) {
    next(error);
  }
};
export const getAllNews = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const Newss = await News.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999999 },
    }).limit(req.query.limit);
    // const Newss = await News.findById(12345);
    res.status(200).json(Newss);
  } catch (error) {
    next(error);
  }
};
