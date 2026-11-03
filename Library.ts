import { Book } from "./Book";

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  getAllBooks(): Book[] {
    return this.books;
  }
}
