import { Book, MAX_BOOKS } from "./Book";
import { Library } from "./Library";

const library = new Library();
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
const books = library.getAllBooks();
console.log(books);
console.log(`Maximum number of books allowed: ${MAX_BOOKS}`);
