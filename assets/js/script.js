
function Book(title, author, pages, read){
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
}
const myLibrary = [];


function addBookToLibrary(title, author, pages, read) {
   const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)

}

function displayBook(){
    myLibrary.forEach(Book) => {
        
    }
}
