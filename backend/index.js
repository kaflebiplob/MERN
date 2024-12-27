import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookroute from "./routes/book.route.js";
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoose");
} catch (error) {
  console.log("error", error);
}

// Routes
app.use("/book", bookroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
