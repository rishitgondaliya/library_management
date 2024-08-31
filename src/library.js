const Book = require("./book");

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    const existingBook = this.books.find((b) => b.isbn === book.isbn);
    if (existingBook) {
      existingBook.isAvailable += book.isAvailable;
      console.log(
        `Added ${book.isAvailable} more copies to the existing book.`
      );
    } else {
      this.books.push(book);
      console.log("Book added successfully.");
    }
  }

  viewAvailableBooks() {
    let availableBooks = this.books.filter((book) => book.isAvailable > 0);
    if (availableBooks.length > 0) {
      availableBooks.forEach((book) => console.log(book.toString()));
    } else {
      console.log("There are no books available now!");
    }
  }

  viewBookAvailability(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (book) {
      console.log(book.toString());
    } else {
      console.log("Book not found.");
    }
  }

  borrowBook(isbn, copies) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (!book || book.isAvailable < copies) {
      console.log("Not enough copies available or book is not available.");
      return;
    }
    book.isAvailable -= copies;
    console.log(`You have borrowed ${copies} copies of the book.`);
  }

  returnBook(isbn, copies) {
    const book = this.books.find((b) => b.isbn === isbn);
    if (!book) {
      console.log("Book not found.");
      return;
    }
    book.isAvailable += copies;
    console.log(`You have returned ${copies} copies of the book.`);
  }
}

module.exports = Library;
