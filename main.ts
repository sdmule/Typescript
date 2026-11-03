import { Book, MAX_BOOKS } from "./Book";
import { Library } from "./Library";
import type { BookID } from "./book.types";

const library = new Library();
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
const books = library.getAllBooks();
console.log(books);
console.log(`Maximum number of books allowed: ${MAX_BOOKS}`);

const bookId: BookID = "1984";
const book = library.getBookById(bookId);
console.log(book);
