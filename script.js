const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBook = document.getElementById("addBook");
const nameInput = document.getElementById("name");


function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
}


addBook.addEventListener("click", function () {
  addBookToLibrary("Jerico", "hahaha", 12, true);
  displayBook();
});

function displayBook() {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    console.log(element);
  }
}
