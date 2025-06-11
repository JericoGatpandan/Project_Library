const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const form = document.getElementById("form");
let nameInput = prompt("Name");
let authorInput = prompt("Author");
let pagesInput = prompt("Pages");
let readInput = prompt("Read");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addBookToLibrary(name, author, pages, read) {
  const newBook = new Book(name, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary(nameInput, authorInput, pagesInput, readInput);

// addBook.addEventListener("click", () => {
//   addBookToLibrary(
//     nameInput.value,
//     authorInput.value,
//     pagesInput.value,
//     readInput.value
//   );
// });

function displayBook() {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    console.log(element);
  }
}

displayBook();
