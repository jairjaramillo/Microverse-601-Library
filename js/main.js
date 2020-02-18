const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}

function addBookToLibrary() {
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  console.log(myLibrary);
}

const addNewBook = document.getElementById('AddBookBtn');
addNewBook.addEventListener('click', addBookToLibrary);
