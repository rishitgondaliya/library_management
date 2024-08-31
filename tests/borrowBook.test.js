const Library = require('../src/library');
const Book = require('../src/book');

describe('Borrow Book Feature', () => {
  let library;

  beforeEach(() => {
      library = new Library();
  });

  test('should borrow a book with sufficient copies', () => {
      const book = new Book('12345', 'Book Title', 'Author Name', 2023, 3);
      library.addBook(book);
      library.borrowBook('12345', 2);
      expect(library.books[0].isAvailable).toBe(1); // 3 - 2 = 1 copy left
  });

  test('should not allow borrowing more copies than available', () => {
      const book = new Book('12345', 'Book Title', 'Author Name', 2023, 2);
      library.addBook(book);
      library.borrowBook('12345', 3);
      expect(library.books[0].isAvailable).toBe(2); // No change, not enough copies
  });

  test('should handle borrowing a non-existing book', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      library.borrowBook('00000', 1);
      expect(consoleSpy).toHaveBeenCalledWith('Not enough copies available or book is not available.');
      consoleSpy.mockRestore();
  });
});