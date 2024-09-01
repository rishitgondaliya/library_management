const Book = require("./book");

class Library {
  constructor() {
    // initially there no books
    this.books = []; 
  }

  // add book feature
  addBook(book) {
    // check if book already exists in the library
    const existingBook = this.books.find((b) => b.isbn === book.isbn);
    if (existingBook) {
      // update existing book count
      existingBook.isAvailable += book.isAvailable;
      console.log(
        `Added ${book.isAvailable} more copies to the existing book.`
      );
    } else {
      // added new book
      this.books.push(book);
      console.log("Book added successfully.");
    }
  }

  // view all available books feature
  viewAvailableBooks() {
    let availableBooks = this.books.filter((book) => book.isAvailable > 0);
    if (availableBooks.length > 0) {
      availableBooks.forEach((book) => console.log(book.toString()));
    } else {
      console.log("There are no books available now!");
    }
  }

  // borrow books feature
  borrowBook(isbn, copies) {
    const book = this.books.find((b) => b.isbn === isbn);
    // book not available or demand count is greater than available
    if (!book || book.isAvailable < copies) {
      console.log("Not enough copies available or book is not available.");
      return;
    }

    // update available count
    book.isAvailable -= copies;
    console.log(`You have borrowed ${copies} copies of the book.`);
  }

  // return borrowed book
  returnBook(isbn, copies) {
    const book = this.books.find((b) => b.isbn === isbn);
    // return existing book
    if (!book) {
      console.log("Book not found.");
      return;
    }
    // update count after returning
    book.isAvailable += copies;
    console.log(`You have returned ${copies} copies of the book.`);
  }
}

module.exports = Library;
