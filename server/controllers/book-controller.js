// import book model
const { Book } = require('../models');

module.exports = {
  // get all books
  async getAllBooks(req, res) {
    const books = await Book.find({});
    return res.json(books);
  },

  // get a single book by its id
  async getSingleBook({ params }, res) {
    const book = await Book.findOne({ bookId: params.bookId });
    if (!book) {
      return res.status(404).json({ message: "Couldn't find a book with this id!" });
    }
    return res.json(book);
  },

  // create a new book and return it
  async createBook({ body }, res) {
    const book = await Book.create(body);
    return res.json(book);
  },

  // update a book by its id and return the updated book
  async updateBook({ params, body }, res) {
    const book = await Book.findOneAndUpdate({ bookId: params.bookId }, body, { new: true });
    if (!book) {
      return res.status(404).json({ message: "Couldn't find a book with this id!" });
    }
    return res.json(book);
  },

  // delete a book by its id and return the deleted book
  async deleteBook({ params }, res) {
    const book = await Book.findOneAndDelete({ bookId: params.bookId });
    if (!book) {
      return res.status(404).json({ message: "Couldn't find a book with this id!" });
    }
    return res.json(book);
  },
};
