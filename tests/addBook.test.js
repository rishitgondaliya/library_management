const Library = require('../src/library');
const Book = require('../src/book');

describe('Add Book Feature', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    test('should add a book with a unique ISBN', () => {
        const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        library.addBook(book);
        expect(library.books.length).toBe(1);
        expect(library.books[0].isbn).toBe('12345');
    });

    test('should not add a book with a duplicate ISBN', () => {
        const book1 = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
        const book2 = new Book('12345', 'Another Title', 'Another Author', 2024, 2);
        library.addBook(book1);
        library.addBook(book2);
        expect(library.books.length).toBe(1);
    });
});
