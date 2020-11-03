const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addToLibrary = function() { myLibrary.push(this); }

Book.prototype.removeFromLibrary = function() {
    const indx = myLibrary.indexOf(this);
    if (indx) { myLibrary.splice(indx, 1); }
}

Book.prototype.createDisplay = function() {
    const template = document.getElementById('book-template');
    const span = template.content.cloneNode(true);
    const listInputs = span.querySelectorAll('li');

    const deleteButton = span.querySelector('button');
    const readDropdown = span.querySelector('select');

    listInputs[0].querySelector('span').textContent = this.title;
    if (this.author !== "") { listInputs[1].textContent = `by ${this.author}`; }
    if (this.pages !== "") { listInputs[2].textContent = `${this.pages} pages`; }
    if (this.read) { readDropdown.value = "read"; } else { readDropdown.value = "unread"; }
    
    deleteButton.addEventListener('click', (e) => {
        removeSpan(e);
        this.removeFromLibrary();
    }, false);

    readDropdown.addEventListener('change', () => {
        this.read = !this.read;
    });
    return span;
}

function displayAllBooks() {
    const newButton = document.getElementById('new-book-btn');
    for (book of myLibrary) {
        const display = book.createDisplay();
        newButton.parentNode.insertBefore(display, newButton);
    }
}

document.getElementById('new-book-btn').addEventListener('click', function() {
    const template = document.getElementById('new-book-template');
    const form = template.content.cloneNode(true);

    const buttons = form.querySelectorAll('button');
    buttons[0].addEventListener('click', submitForm, false);
    buttons[1].addEventListener('click', removeSpan, false);

    this.parentNode.insertBefore(form, this);
}, false);

function submitForm(e) {
    const form = findSpanContains(e);
    const inputs = form.querySelectorAll('input');

    const err = validateForm(inputs);
    if (err !== "") {
        const errorMsg = form.querySelector('p');
        errorMsg.textContent = err;
        return;
    }
    
    const title = inputs[0].value;
    const author = inputs[1].value;
    const pages = inputs[2].value;
    const read = inputs[3].checked;

    const book = new Book(title, author, pages, read);
    book.addToLibrary();
    replaceForm(form, book);
}

function validateForm(inputs) {
    const title = inputs[0].value;
    const pages = inputs[2].value;
    if (title === "") { return "Please enter a book title."}
    if (pages === "" || !isNumeric(pages) || parseInt(pages) < 2) { return "Please enter a valid page number."; }
    return "";
}

function replaceForm(form, book) {
    const span = book.createDisplay();
    form.parentNode.replaceChild(span, form);
}

function removeSpan(e) {
    const span = findSpanContains(e);
    if (span) { span.remove();}
}

function findSpanContains(element) {
    const library = document.getElementById('library');
    const spans = library.querySelectorAll('span');

    for (const span of spans) {
        if (span.contains(element.target)) {
            return span;
        }
    }
    return false;
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}