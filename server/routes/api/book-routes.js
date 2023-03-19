const router = require('express').Router();
const bookController = require('../../controllers/book-controller');

// GET all books
router.get('/', bookController.getAllBooks);

// GET a single book by id
router.get('/:id', bookController.getSingleBook);

// POST a new book
router.post('/', bookController.createBook);

// PUT update a book by id
router.put('/:id', bookController.updateBook);

// DELETE a book by id
router.delete('/:id', bookController.deleteBook);

module.exports = router;
