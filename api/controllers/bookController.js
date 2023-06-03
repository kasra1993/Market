import Book from "../models/Book.js";
import Hotel from "../models/Hotel.js";

export const createBook = async (req, res, next) => {
  try {
    const newbook = await Book.create({ ...req.body });
    // await Hotel.findByIdAndUpdate(hotelId, { $push: { books: newbook._id } });
    res.status(200).json(newbook);
  } catch (error) {
    next(err);
    console.log("there was an error regarding controller");
  }
};
export const updateBook = async (req, res, next) => {
  const { id: bookId } = req.params;

  try {
    const updatedbook = await Book.findByIdAndUpdate(
      bookId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedbook);
  } catch (error) {
    next(error);
  }
};
export const updateBookAvailability = async (req, res, next) => {
  try {
    await Book.updateOne(
      { "bookNumbers._id": req.params.id },
      {
        $push: {
          "bookNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    res.status(200).json("the availibility has been updated");
  } catch (error) {
    next(error);
  }
};
export const deleteBook = async (req, res, next) => {
  const { id: bookId, hotelid: hotelId } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { books: bookId },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("book has been deleted");
  } catch (error) {
    next(error);
  }
};
export const getBook = async (req, res, next) => {
  const { id: bookId } = req.params;
  try {
    const book = await Book.findById(bookId);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    // const books = await Hotel.findById(12345);

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
