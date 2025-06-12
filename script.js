const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.info = function () {
    return (
      this.id +
      " " +
      this.name +
      " " +
      this.author +
      " " +
      this.pages +
      " " +
      this.read
    );
  };
}

function addBookToLibrary(name, author, pages, read, id) {
  const newBook = new Book(name, author, pages, read, id);
  myLibrary.push(newBook);
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
