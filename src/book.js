class Book {
    constructor(isbn, title, author, year, copies) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = copies;
    }

    toString() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Available copies: ${this.isAvailable}`;
    }
}

module.exports = Book;
