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

//dom elements
const editSection = document.querySelector("#editSection");
const popUpForm = document.querySelector("#popUpForm");
const submitButton = popUpForm.querySelector("#submitButton");

//Buttons
const addBookButton = document.querySelector("#addBookButton");
const editBookButton = document.querySelector("#editBookButton");
const removeBookButton = document.querySelector("#removeBookButton");
const closeFormButton = document.querySelector("#closeFormButton");

//Event Listeners
//addBookButton
addBookButton.addEventListener("click", () => {
    popUpForm.children[0].children[1].textContent = "Add Book";
    popUpForm.style.display = "block";
});
//closeFormButton
closeFormButton.addEventListener("click", () => {
    popUpForm.style.display = "none";
});


//Edit Book
popUpForm.querySelector("form").onsubmit = function (e) {
    e.preventDefault();

    let nBook = new Book(
        popUpForm.querySelector("#title").value,
        popUpForm.querySelector("#author").value,
        popUpForm.querySelector("#nPages").value,
        popUpForm.querySelector("#pDate").value,
        popUpForm.querySelector("#readed").checked ? true : false
    );
    addBookToLibrary(nBook, table);
}

submitButton.addEventListener("click", () => {
    //validate form
    if (popUpForm.querySelector("#title").value == "") {
        alert("Please enter a title");
        return;
    }
    if (popUpForm.querySelector("#author").value == "") {
        alert("Please enter an author");
        return;
    }
    if (popUpForm.querySelector("#nPages").value == "") {
        alert("Please enter the number of pages");
        return;
    }
    if (popUpForm.querySelector("#pDate").value == "") {
        alert("Please enter the publication date");
        return;
    }
    popUpForm.style.display = "none";
});

addBookToLibrary(book1, table);
addBookToLibrary(book2, table);
