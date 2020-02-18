const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.status = function () {
    if (this.isRead === true) {
      return 'Read';
    }
    return 'Not Read';
  };
  this.info = function () {
    return `${title} ,${author} ,${pages}pages${this.status()}`;
  };
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

function render(form) {
  const bookstr = form.inputbox.value;
  document.write(`the book is ${bookstr}`);
  document.write(`ets`);
}
