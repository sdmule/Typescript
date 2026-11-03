export class Book {
    title;
    author;
    constructor(title = "Unknown", author = "Unknown") {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}
