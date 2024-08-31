const Library = require('../src/library');
const Book = require('../src/book');

describe('View Available Books Feature', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should display available books when books are present', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        library.addBook(book);
        const consoleSpy = jest.spyOn(console, 'log');
        library.viewAvailableBooks();
        expect(consoleSpy).toHaveBeenCalledWith(book.toString());
        consoleSpy.mockRestore();
    });

    test('should show a message when no books are available', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        library.viewAvailableBooks();
        expect(consoleSpy).toHaveBeenCalledWith('There are no books available now!');
        consoleSpy.mockRestore();
    });
});
