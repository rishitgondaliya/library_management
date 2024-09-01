const Library = require('../src/library');
const Book = require('../src/book');

describe('View Available Books Feature', () => {
    let library;

    // Initialize a new Library instance before each test
    beforeEach(() => {
        library = new Library();
    });

    // Test case for displaying available books when books are present
    test('should display available books when books are present', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        library.addBook(book);
        const consoleSpy = jest.spyOn(console, 'log');
        library.viewAvailableBooks();
        expect(consoleSpy).toHaveBeenCalledWith(book.toString()); // Check if the book information is printed
        consoleSpy.mockRestore();
    });

    // Test case for showing a message when no books are available
    test('should show a message when no books are available', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        library.viewAvailableBooks();
        expect(consoleSpy).toHaveBeenCalledWith('There are no books available now!'); // Check if the message is shown
        consoleSpy.mockRestore();
    });
});
