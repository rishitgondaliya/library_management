const Library = require('../src/library');
const Book = require('../src/book');

describe('Return Book Feature', () => {
    let library;

    // Initialize a new Library instance before each test
    beforeEach(() => {
        library = new Library();
    });

    // Test case for returning a borrowed book and updating available copies
    test('should return a borrowed book and update available copies', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        library.addBook(book);
        library.borrowBook('12345', 2);
        library.returnBook('12345', 2);
        expect(library.books[0].isAvailable).toBe(3); // 3 copies after returning 2
    });

    // Test case for handling returning a non-existing book
    test('should handle returning a non-existing book', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        library.returnBook('00000', 1);
        expect(consoleSpy).toHaveBeenCalledWith('Book not found.'); // Check if the correct message is shown
        consoleSpy.mockRestore();
    });

    // Test case for correctly increasing available copies on return
    test('should correctly increase available copies on return', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 5);
        library.addBook(book);
        library.borrowBook('12345', 3);
        library.returnBook('12345', 1);
        expect(library.books[0].isAvailable).toBe(3); // 2 remaining + 1 returned
    });
});
