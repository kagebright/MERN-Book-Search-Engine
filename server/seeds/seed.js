const db = require('../config/connection');
const { Book } = require('../models');

const bookData = require('./bookData.json');

db.once('open', async () => {
  try {
    // delete all existing books
    await Book.deleteMany({});

    // insert the book data
    await Book.insertMany(bookData);

    console.log('Book data seeded successfully!');
  } catch (err) {
    console.error(err);
  }

  // exit the process
  process.exit();
});
