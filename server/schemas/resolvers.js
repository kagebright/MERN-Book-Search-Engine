const { User, Book } = require('../models');

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    book: async (_, { id }) => {
      return Book.findOne({ id });
    },
  },
  Mutation: {
    addBook: async (_, { title, author }) => {
      const newBook = await Book.create({ title, author });
      return newBook;
    },
  },
};

module.exports = resolvers;
