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

const titleValue = document.querySelector("#title");
const authorValue = document.querySelector("#author");
const pagesValue = document.querySelector("#pages");
const readValue = document.querySelector("#read");

const Library = document.querySelector(".Library");
const readCheckbox = document.getElementById("read");
const readStatusText = document.getElementById("read-status-text");

readCheckbox.addEventListener("change", () => {
  readStatusText.textContent = readCheckbox.checked ? "Read" : "Not Read";
});

addBookBtn.addEventListener("click", () => {
  titleValue.value = "";
  authorValue.value = "";
  pagesValue.value = "";
  readValue.checked = false;
  dialog.showModal();
});

const cancelBtn = dialog.querySelector('button[value="cancel"]');
cancelBtn.addEventListener("click", () => {
  dialog.close();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const title = titleValue.value.trim();
  const author = authorValue.value.trim();
  const pages = pagesValue.value.trim();

  if (!title || !author || !pages) {
    alert("Please fill in all fields before submitting.");
    return;
  }
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
  // Remove all book cards except the "Add Book" card
  const addBookCard = document.getElementById("addBook").parentElement;
  // Remove all children except addBookCard
  Array.from(Library.children).forEach((child) => {
    if (child !== addBookCard) {
      Library.removeChild(child);
    }
  });

  // Add a card for each book
  myLibrary.forEach((book, idx) => {
    const bookCard = document.createElement("div");
    bookCard.className = "card";

    const bookInfo = document.createElement("div");
    bookInfo.className = "book-details";
    bookInfo.innerHTML = `
      <button class="delete-btn"><span class="material-symbols-outlined">close</span></button>

      <img src="img/Book-red.svg" alt="" class=".book-img">
       
      <p class="title-text"><strong>${book.name}</strong></p>
      <p class="author-text">${book.author}</p>
      <p class="pages-text">${book.pages}</p>
      <p class="read-text">Status: ${book.read}</p>
      <div class="btn">
        <button class="read-btn">${
          book.read === "Read" ? "Not Read" : "Read"
        }</button>
      </div>
    `;

    // Read toggle
    bookInfo.querySelector(".read-btn").addEventListener("click", () => {
      book.read = book.read === "Read" ? "Not Read" : "Read";
      displayBook();
    });

    // Delete
    bookInfo.querySelector(".delete-btn").addEventListener("click", () => {
      myLibrary.splice(idx, 1);
      displayBook();
    });

    bookCard.appendChild(bookInfo);
    Library.insertBefore(bookCard, addBookCard);
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Read");
addBookToLibrary("The Life of Me", "Jerico Gatpandan", 635, "Not Read");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Read");
displayBook();
