﻿# Library Management System

## Project Description

A console-based library management system created using JavaScript. This application provides the following features:
- Add books
- View available books
- Borrow books
- Return borrowed books

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rishitgondaliya/library_management.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd library_management
   ```

3. **Install all dependencies:**
   ```bash
   npm install
   ```

## Directory Structure

```
library_management/
├── src/
│   ├── book.js             # Book class implementation
│   └── library.js          # Library class implementation
|
├── test/                   # Directory containing test cases
│   ├── addBook.test.js
│   ├── availableBooks.test.js
│   ├── borrowBook.test.js
│   └── returnBook.test.js
|
└── main.js                 # Entry point for the application
```

## Running Tests

- To run all test cases:
  ```bash
  npm test
  ```

## Running the Application

- To run the application:
  ```bash
  node main.js
  ```

## Usage Instructions

After running the application using the `node main.js` command, you can perform the following actions by following the on-screen prompts:

- **Add books:** Enter book details such as ISBN, title, author, publication year, and the number of copies. If a book with the same ISBN already exists, you'll be prompted to add additional copies.
- **View available books:** Display a list of all available books in the library along with their details.
- **Borrow books:** Enter the ISBN of the book you want to borrow and the number of copies. The system will update the available copies accordingly.
- **Return borrowed books:** Enter the ISBN of the book you want to return and the number of copies. The system will update the available copies accordingly.
