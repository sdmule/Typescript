import { Book, MAX_BOOKS } from "./Book";

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  getAllBooks(): Book[] {
    return this.books;
  }
}

const library = new Library();
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
const books = library.getAllBooks();
console.log(books);
console.log(`Maximum number of books allowed: ${MAX_BOOKS}`);
