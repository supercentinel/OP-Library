function Book(title, author, nPages, pDate, readed) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.pDate = pDate;
    this.readed = readed;

    this.info = function () {
        console.log(title)
    }
}

const book1 = new Book("Brave new world", "Aldous Huxley", 200, 1932, true);

const book2 = new Book("Farhenheit 451", "Ray Bradbury", 200, 1953, true);

const table = document.querySelector("table");

let addBookToLibrary = function (book, table) {
    let newRow = table.appendChild(document.createElement("tr"));
    for (let i = 0; i < 5; i++) {
        newRow.appendChild(document.createElement("td"));
    }
    newRow.cells[0].textContent = book.title;
    newRow.cells[1].textContent = book.author;
    newRow.cells[2].textContent = book.nPages;
    newRow.cells[3].textContent = book.pDate;
    newRow.cells[4].textContent = book.readed;
}

addBookToLibrary(book1, table);
addBookToLibrary(book2, table);
