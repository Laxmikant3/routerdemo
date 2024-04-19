const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 9000;
const DATABASE_URI = process.env.DATABASE_URI;

const app = express();

// Connect to MongoDB
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());

// Routes
const userRouter = require("./server/routes/user");
const productRouter = require("./server/routes/product");

app.use("/user", userRouter);
app.use("/product", productRouter);

// Serve static files (uncomment if serving a React frontend)
// const buildPath = path.join(__dirname, 'mern1', 'build');
// app.use(express.static(buildPath));
//
// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
