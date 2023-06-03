import Room from "../models/Book.js";

export const createRoom = async (req, res, next) => {
  try {
    const room = await Room.create({ ...req.body });
    // const savedroom = await newroom.save();
    //   console.log(newroom);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
export const updateRoom = async (req, res, next) => {
  const { id: roomId } = req.params;

  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};
export const deleteRoom = async (req, res, next) => {
  const { id: roomId } = req.params;
  try {
    const deletedItem = await Room.findByIdAndDelete(roomId);
    res.status(200).json("deletion successful");
  } catch (error) {
    next(error);
  }
};
export const getRoom = async (req, res, next) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};
export const getAllroom = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const rooms = await Room.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 999999 },
    }).limit(req.query.limit);
    // const rooms = await room.findById(12345);
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};
