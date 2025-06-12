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
  const addBookCard =
    document.querySelector.getElementById("addBook").parentElement;

  Array.from(Library.children).forEach((child) => {
    if (child !== addBookCard) {
      Library.removeChild(child);
    }
  });
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "card";

    const bookInfo = document.createElement("div");
    bookInfo.className = "book-details";
    // bookInfo.textContent = book.info();
    bookInfo.innerHTML = `
    <img src="img/Book-red.svg" alt="">
    <p class="title-text"><strong>${titleValue.value}</strong></p>
    <p class="author-text">Author: ${authorValue.value}</p>
    <p class="pages-text">Pages: ${pagesValue.value}</p>
    <div class="btn">
      <button class="read-btn">${book.read === "Read" ? "Mark as Unread" : "Mark as Read"}</button>
      <button class="delete-btn">DELETE</button>
    </div>
  `;

    

    bookCard.appendChild(bookInfo);
    Library.insertBefore(bookCard, addBookCard);
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
addBookToLibrary("1984", "George Orwell", 328, "Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Not Read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "Read");
addBookToLibrary("Moby Dick", "Herman Melville", 635, "Not Read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Read");
displayBook();
