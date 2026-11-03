import { Book } from "./Book";
import type { BookID } from "./book.types";

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  getAllBooks(): Book[] {
    return this.books;
  }
  getBookById(id: BookID): Book | undefined {
    return this.books.find((book) => book.title === id);
  }
}
