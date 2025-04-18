import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const searchBooksByName = async (req, res) => {
  try {
    const { name } = req.query;
    const regex = new RegExp(name, 'i'); // case-insensitive regex
    const books = await Book.find({ name: regex });
    res.status(200).json(books);
  } catch (error) {
    console.log("Search error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};