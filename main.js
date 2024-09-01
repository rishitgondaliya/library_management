// readline-sync -> for reading inputs from the console
const readlineSync = require("readline-sync");

const Library = require("./src/library");
const Book = require("./src/book");

const library = new Library();
let exit = false;

// verify ISBN number of the book
const getValidIsbn = () => {
  let isbn;
  do {
    isbn = readlineSync.question("Enter ISBN (5 digits): ");
    if (isbn.length !== 5) {
      console.log("Invalid ISBN. Please enter a 5-digit ISBN.");
    }
  } while (isbn.length !== 5); // run until a valid ISBN number is not entered
  return isbn;
};

const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  while (year > currentYear) {
    console.log(
      "Publication year cannot be in the future. Please enter a valid year."
    );
    year = parseInt(readlineSync.question("Enter Publication Year: "));
  }
  return year;
};

while (!exit) {
  // enable user to select an option to perform action
  console.log("\nLibrary Management System");
  console.log("1. Add a Book");
  console.log("2. View Available Books");
  console.log("3. Borrow a Book");
  console.log("4. Return a book");
  console.log("5. Exit");
  const choice = readlineSync.question("Choose an option: ");

  switch (choice) {
    // add book feature
    case "1":
      const isbn = getValidIsbn();
      const existingBook = library.books.find((book) => book.isbn === isbn);

      if (existingBook) {
        const additionalCopies = parseInt(
          readlineSync.question(
            "This book already exists. How many copies would you like to add? "
          )
        );
        existingBook.isAvailable += additionalCopies;
        console.log(`${additionalCopies} copies added to the existing book.`);
      } else {
        const title = readlineSync.question("Enter Title: ");
        const author = readlineSync.question("Enter Author: ");
        let year = parseInt(readlineSync.question("Enter Publication Year: "));
        year = validateYear(year);
        const copies = parseInt(
          readlineSync.question("Enter number of copies: ")
        );
        const book = new Book(isbn, title, author, year, copies);
        library.addBook(book);
      }
      break;

    // view available books
    case "2":
      console.log("Available Books:");
      console.log("----------------");
      library.viewAvailableBooks();
      break;

    // borrow available book
    case "3":
      const borrowIsbn = getValidIsbn();
      const count = parseInt(
        readlineSync.question("How many copies do you want? ")
      );
      library.borrowBook(borrowIsbn, count);
      break;

    // return a borrowed book
    case "4":
      const returnIsbn = getValidIsbn();
      const returnCount = parseInt(
        readlineSync.question("How many copies do you want to return?")
      );
      library.returnBook(returnIsbn, returnCount);
      break;

    // exit the application
    case "5":
      exit = true;
      console.log("Exiting the system.");
      break;

    // default case for invalid option
    default:
      console.log("Invalid option. Please try again.");
  }
}
