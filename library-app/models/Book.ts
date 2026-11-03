export class Book {
  constructor(
    public title: string = "Unknown",
    public author: string = "Unknown",
  ) {}

  getInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  }
}

export const MAX_BOOKS = 100;
