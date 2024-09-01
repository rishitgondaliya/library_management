class Book {
    constructor(isbn, title, author, year, copies) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = copies; // Number of copies available
    }

    // return book details
    toString() {
        return `ISBN: ${this.isbn}\nTitle: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}\nAvailable copies: ${this.isAvailable}\n--------------------`;
    }
}

module.exports = Book;
