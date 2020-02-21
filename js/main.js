/* eslint-disable no-console */
const myLibrary = [];

if (typeof (Storage) !== 'undefined') {
  if (!sessionStorage.library) {
    sessionStorage.library = JSON.stringify(myLibrary);
  }
} else {
  // eslint-disable-next-line no-alert
  alert('No storage permitted');
}

// eslint-disable-next-line no-unused-vars
function Show() {
  document.getElementById('bookform').style.visibility = 'visible';
}

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function render(myArr) {
  const table = document.getElementById('book-list');
  for (let i = 0; i < myArr.length; i += 1) {
    const rw = table.insertRow(0);
    const cl1 = rw.insertCell(0);
    const cl2 = rw.insertCell(1);
    const cl3 = rw.insertCell(2);
    const cl4 = rw.insertCell(3);
    const cl5 = rw.insertCell(4);
    cl1.innerHTML = `${myArr[i].title}`;
    cl2.innerHTML = `${myArr[i].author}`;
    cl3.innerHTML = `${myArr[i].pages}`;
    cl4.innerHTML = `${myArr[i].status}`;
    cl5.innerHTML = `<button class="btn btn-danger" id="delBtn-${i}" onclick="del(${i})">Delete</button>`;
  }
  // for (let i = 0; i < myArr.length; i += 1) {
  //   console.log(myArr[i]);
  // }
}

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const value = document.getElementById('inputStatus').checked;
  let status;

  if (value === true) {
    status = 'Read';
  } else {
    status = 'Unread';
  }

  const newBook = new Book(title, author, pages, status);

  const temLibrary = JSON.parse(sessionStorage.library);
  temLibrary.push(newBook);
  sessionStorage.library = JSON.stringify(temLibrary);
  window.location.reload(false);
  render(temLibrary);
  document.querySelector('form').reset();
  document.querySelector('form').style.visibility = 'hidden';
}

// eslint-disable-next-line no-unused-vars
function del(number) {
  const temLibrary = JSON.parse(sessionStorage.library);
  temLibrary.splice(number, 1);
  sessionStorage.library = JSON.stringify(temLibrary);
  window.location.reload(false);
  render(temLibrary);
}

document.getElementById('bookform').addEventListener('submit', (e) => {
  addBookToLibrary(e);
});

const tempLibrary = JSON.parse(sessionStorage.library);
render(tempLibrary);
