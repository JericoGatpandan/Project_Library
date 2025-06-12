const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.info = function () {
    return this.name + " " + this.author + " " + this.pages + " " + this.read;
  };
}

function addBookToLibrary(name, author, pages, read, id) {
  const newBook = new Book(name, author, pages, read, id);
  myLibrary.push(newBook);
}

const addBookBtn = document.getElementById("addBook");
const dialog = document.getElementById("dialog");
const outputBox = document.querySelector("output");
const confirmBtn = document.querySelector("#confirmBtn");

const titleValue = document.querySelector(".title");
const authorValue = document.querySelector(".author");
const pagesValue = document.querySelector(".pages");
const readValue = document.querySelector(".read");

const Library = document.querySelector(".Library");

addBookBtn.addEventListener("click", () => {
  titleValue.value = "";
  authorValue.value = "";
  pagesValue.value = "";
  readValue.checked = false;
  dialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(
    titleValue.value,
    authorValue.value,
    pagesValue.value,
    readValue.checked ? "Read" : "Not Read"
  );
  displayBook();
  dialog.close();
});

function displayBook() {
  const book = myLibrary[myLibrary.length - 1];
  const bookCard = document.createElement("div");
  bookCard.className = "card";

  const bookInfo = document.createElement("p");
  bookInfo.className = "book-details";
  bookInfo.textContent = book.info();

  bookCard.appendChild(bookInfo);

  const addBookCard = document.getElementById("addBook").parentElement;

  Library.insertBefore(bookCard, addBookCard);
}
