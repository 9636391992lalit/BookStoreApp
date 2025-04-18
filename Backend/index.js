import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/book.route.js'; 
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBUI;

// MongoDB connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Required to resolve __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//  Serve PDFs from the BOOKS folder at the root of the project
app.use("/books", express.static(path.join(__dirname, "../BOOKS")));
console.log("Serving static files from:", path.join(__dirname, "../BOOKS"));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
