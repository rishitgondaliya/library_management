const Library = require('../src/library');
const Book = require('../src/book');

describe('Add Book Feature', () => {
    let library;

    // Initialize a new Library instance before each test
    beforeEach(() => {
        library = new Library();
    });

    // Test case for adding a book with a unique ISBN
    test('should add a book with a unique ISBN', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        library.addBook(book);
        expect(library.books.length).toBe(1); // Check if one book is added
        expect(library.books[0].isbn).toBe('12345'); // Check if the ISBN is correct
    });

    // Test case for not adding a book with a duplicate ISBN
    test('should not add a book with a duplicate ISBN', () => {
        const book1 = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        const book2 = new Book('12345', 'Another Title', 'Another Author', 2024, 2);
        library.addBook(book1);
        library.addBook(book2); // Adding a book with the same ISBN
        expect(library.books.length).toBe(1); // Ensure only one book is present
    });
});
