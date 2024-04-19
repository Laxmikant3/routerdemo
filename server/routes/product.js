const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// GET a product by name
router.get("/:name", async (req, res) => {
  try {
    const product = await Product.findOne({ name: req.params.name });
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.json(product);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// POST a new product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// PATCH/update a product by name
router.patch("/:name", async (req, res) => {
  try {
    // Find the product by name and update its price
    const product = await Product.findOneAndUpdate(
      { name: req.params.name },
      { price: req.body.price }, // Update the price field with the value from the request body
  
    );
    
    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.json(product); // Send the updated product as JSON response
  } catch (error) {
    res.status(500).send("Error: " + error); // Handle errors
  }
});
// DELETE a product by name
router.delete("/:name", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      name: req.params.name,
    });
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

module.exports = router;
