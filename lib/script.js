//Book constructor
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

//eunm for type of action
const action = {
    ADD: 0,
    EDIT: 1,
    REMOVE: 2
}

let currentAction = action.ADD;
let wasExit = false;

//Example books
const book1 = new Book("Brave new world", "Aldous Huxley", 200, 1932, true);
const book2 = new Book("Farhenheit 451", "Ray Bradbury", 200, 1953, true);
const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 200, 1954, true);
const book4 = new Book("The sailor who fell from grace with the sea", "Yukio Mishima", 200, 1963, true);

//table of books
const table = document.querySelector("table");

//add book to table
let addBookToLibrary = function (book, table) {
    let newRow = table.appendChild(document.createElement("tr"));
    for (let i = 0; i < 6; i++) {
        newRow.appendChild(document.createElement("td"));
    }
    newRow.cells[0].textContent = table.rows.length - 1;
    newRow.cells[1].textContent = book.title;
    newRow.cells[2].textContent = book.author;
    newRow.cells[3].textContent = book.nPages;
    newRow.cells[4].textContent = book.pDate;
    newRow.cells[5].textContent = book.readed;
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

//flush function for removing form extra inputs
let flushForm = function () {
    //remove input for book number
    popUpForm.children[1].children[0].removeChild(popUpForm.children[1].children[0].children[0]);
    //remove label for book number
    popUpForm.children[1].children[0].removeChild(popUpForm.children[1].children[0].children[0]);
}

let addBookIdInput = function () {
    //add input for book number
    popUpForm.children[1].children[0].insertBefore(document.createElement("input"), popUpForm.children[1].children[0].children[0]);
    popUpForm.children[1].children[0].children[0].setAttribute("type", "number");
    popUpForm.children[1].children[0].children[0].setAttribute("id", "bookNumber");
    //add label for book number
    popUpForm.children[1].children[0].children[0].insertAdjacentHTML("beforebegin", "<label for='bookNumber'>Book Number: </label>");
}


//Event Listeners
//addBookButton
addBookButton.addEventListener("click", () => {
    if ((currentAction == action.EDIT || currentAction == action.REMOVE) && !wasExit) {
        flushForm();
    }

    wasExit = false;

    currentAction = action.ADD;
    popUpForm.children[0].children[1].textContent = "Add Book";
    popUpForm.style.display = "block";
});

//Edit Book
editBookButton.addEventListener("click", () => {
    //add input for book number
    if(currentAction == action.ADD || wasExit) {
        addBookIdInput();
    }

    currentAction = action.EDIT;
    popUpForm.children[0].children[1].textContent = "Edit Book";
    popUpForm.style.display = "block";

    wasExit = false;
});

//Remove Book
removeBookButton.addEventListener("click", () => {
    //add input for book number
    if(currentAction == action.ADD || wasExit) {
        addBookIdInput();
    }

    currentAction = action.REMOVE;
    popUpForm.children[0].children[1].textContent = "Remove Book";
    popUpForm.style.display = "block";

    wasExit = false;

    //add input for book number
});

//closeFormButton
closeFormButton.addEventListener("click", () => {
    if (currentAction == action.EDIT || currentAction == action.REMOVE) {
        //remove input and label for book number
        flushForm();
    }

    wasExit = true;

    popUpForm.style.display = "none";
});


popUpForm.querySelector("form").onsubmit = function (e) {
    e.preventDefault();

    switch (currentAction) {
        case action.ADD:
            let nBook = new Book(
                popUpForm.querySelector("#title").value,
                popUpForm.querySelector("#author").value,
                popUpForm.querySelector("#nPages").value,
                popUpForm.querySelector("#pDate").value,
                popUpForm.querySelector("#readed").checked
            );
            addBookToLibrary(nBook, table);
        break;
        case action.EDIT:
        break;
        case action.REMOVE:
        break;
    }
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
addBookToLibrary(book3, table);
addBookToLibrary(book4, table);
