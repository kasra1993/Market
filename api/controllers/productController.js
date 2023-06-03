import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  //   const productId = req.params.productId;
  try {
    console.log(req.body);
    const newProduct = await Product.create({ ...req.body });
    // await Product.findByIdAndUpdate(productId, { $push: { rooms: newRoom._id } });
    res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedRoom = await Product.findByIdAndDelete(productId);

    res.status(200).json("product has been deleted");
  } catch (error) {
    next(error);
  }
};
export const getProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    // const rooms = await Hotel.findById(12345);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
