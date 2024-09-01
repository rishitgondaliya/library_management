const Book = require("./book");

class Library {
  constructor() {
    // Initially, there are no books
    this.books = []; 
  }

  // Add book feature
  addBook(book) {
    // Check if the book already exists in the library
    const existingBook = this.books.find((b) => b.isbn === book.isbn);
    if (existingBook) {
      // Update the existing book count if it already exists
      existingBook.isAvailable += book.isAvailable;
      console.log(
        `Added ${book.isAvailable} more copies to the existing book.`
      );
    } else {
      // Add new book to the library if it does not exist
      this.books.push(book);
      console.log("Book added successfully.");
    }
  }

  // View all available books feature
  viewAvailableBooks() {
    // Filter books that have available copies
    let availableBooks = this.books.filter((book) => book.isAvailable > 0);
    if (availableBooks.length > 0) {
      // Print details of each available book
      availableBooks.forEach((book) => console.log(book.toString()));
    } else {
      console.log("There are no books available now!");
    }
  }

  // Borrow books feature
  borrowBook(isbn, copies) {
    // Find the book by ISBN
    const book = this.books.find((b) => b.isbn === isbn);
    // Check if the book is available or if there are enough copies to borrow
    if (!book || book.isAvailable < copies) {
      console.log("Not enough copies available or book is not available.");
      return;
    }

    // Update the available count after borrowing
    book.isAvailable -= copies;
    console.log(`You have borrowed ${copies} copies of the book.`);
  }

  // Return borrowed book feature
  returnBook(isbn, copies) {
    // Find the book by ISBN
    const book = this.books.find((b) => b.isbn === isbn);
    // Check if the book exists in the library
    if (!book) {
      console.log("Book not found.");
      return;
    }
    // Update the available count after returning
    book.isAvailable += copies;
    console.log(`You have returned ${copies} copies of the book.`);
  }
}

module.exports = Library;
