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
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');

  // console.log(myArr);
  for (let i = 0; i < myArr.length; i += 1) {
    row.innerHTML = `<td>${myArr[i].title}</td>
                      <td>${myArr[i].author}</td>
                      <td>${myArr[i].pages}</td>
                      <td>${myArr[i].status}</td>
                      <td><button class="btn btn-danger" id="delBtn-${i}" onclick="del(${i})">Delete</button></td>`;
    list.appendChild(row);
  }
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
  render(temLibrary);
  sessionStorage.library = JSON.stringify(temLibrary);
  document.querySelector('form').reset();
  document.querySelector('form').style.visibility = 'hidden';
}

// eslint-disable-next-line no-unused-vars
function del(number) {
  const temLibrary = JSON.parse(sessionStorage.library);
  const delItem = temLibrary.splice(number, 1);
  sessionStorage.library = JSON.stringify(temLibrary);
  console.log(number);
  console.log(delItem);
  render(temLibrary);
}

document.getElementById('bookform').addEventListener('submit', (e) => {
  addBookToLibrary(e);
});

render(JSON.parse(sessionStorage.library));
