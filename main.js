const readlineSync = require("readline-sync");
const Library = require("./src/library");
const Book = require("./src/book");

const library = new Library();
let exit = false;

// Add initial books
const initialBooks = [
  new Book("12345", "The Great Gatsby", "F. Scott Fitzgerald", 1925, 5),
  new Book("67890", "To Kill a Mockingbird", "Harper Lee", 1960, 3),
  new Book("11121", "1984", "George Orwell", 1949, 4),
  new Book("13141", "The Catcher in the Rye", "J.D. Salinger", 1951, 2),
];

initialBooks.forEach((book) => library.addBook(book));

// Function to get valid ISBN
const getValidIsbn = () => {
  let isbn;
  do {
    isbn = readlineSync.question("Enter ISBN (5 digits): ");
    if (isbn.length !== 5) {
      console.log("Invalid ISBN. Please enter a 5-digit ISBN.");
    }
  } while (isbn.length !== 5); // Run until a valid ISBN number is entered
  return isbn;
};

// Function to validate year
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
  console.log("\nLibrary Management System");
  console.log("1. Add a Book");
  console.log("2. View Available Books");
  console.log("3. Borrow a Book");
  console.log("4. Return a Book");
  console.log("5. Exit");
  const choice = readlineSync.question("Choose an option: ");

  switch (choice) {
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

    case "2":
      console.log("Available Books:");
      console.log("----------------");
      library.viewAvailableBooks();
      break;

    case "3":
      const borrowIsbn = getValidIsbn();
      const count = parseInt(
        readlineSync.question("How many copies do you want? ")
      );
      library.borrowBook(borrowIsbn, count);
      break;

    case "4":
      const returnIsbn = getValidIsbn();
      const returnCount = parseInt(
        readlineSync.question("How many copies do you want to return? ")
      );
      library.returnBook(returnIsbn, returnCount);
      break;

    case "5":
      exit = true;
      console.log("Exiting the system.");
      break;

    default:
      console.log("Invalid option. Please try again.");
  }
}
