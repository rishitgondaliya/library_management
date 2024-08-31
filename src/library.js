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

  // view all available books
  viewAvailableBooks() {
    let availableBooks = this.books.filter((book) => book.isAvailable > 0);
    if (availableBooks.length > 0) {
      availableBooks.forEach((book) => console.log(book.toString()));
    } else {
      console.log("There are no books available now!");
    }
  }
}

module.exports = Library;
