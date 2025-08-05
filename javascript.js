// basic library functions
const myLibrary = [];

function book(title, author, pages, read, ID){
    if (!new.target) {
        throw Error("error use new operator")
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = ID;
};

function addBookToLibrary(title, author, pages, read, ID) {
    let newBook = new book(title,author,pages,read,crypto.randomUUID())
    myLibrary.push(newBook)

};

// temp ------------------------------------------------------------------------------
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "yes")
// addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1238", "yes")
// addBookToLibrary("No Logo!", "Naomi Klein", "295", "yes")
// addBookToLibrary("The Witcher - the Last Wish", "Andrzej Sapkowski", "288", "no")
// temp end ------------------------------------------------------------------------------

//display new book to library
function displayLibrary(){
    removeOldLibrary();
    for (let i = 0; i < myLibrary.length; i++){
        const books = document.querySelector(".books");
        const bookContainer = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        bookContainer.classList.add("bookContainer");
        author.classList.add("booksAuthor");
        pages.classList.add("booksPages");
        read.classList.add("booksRead");
        title.textContent = "Title: " + myLibrary[i].title;
        author.textContent = "Autohr: " + myLibrary[i].author;
        pages.textContent = "Pages: " + myLibrary[i].pages;
        read.textContent = "Read? " + myLibrary[i].read;
        books.appendChild(bookContainer);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
    };
};

// remove old displayed Library
function removeOldLibrary(){
    const oldLibrary = document.querySelector(".books");
    while(oldLibrary.firstChild){
        oldLibrary.removeChild(oldLibrary.firstChild);
    };
};

//modal functions to input new books
const newBookModal = document.querySelector(".newBookModal");
const newBookButton = document.querySelector("#newBookButton");
const closeBookModal = document.querySelector(".closeButton");
const submitNewBook = document.querySelector('button[type="submit"]');

newBookButton.onclick = () => {
    newBookModal.showModal();
};

closeBookModal.onclick = () => {
    newBookModal.close();
};

submitNewBook.onclick = () => {
    const bookTitle = document.querySelector('input[name="bookTitle"]').value;
    const bookAuthor = document.querySelector('input[name="bookAuthor"]').value;
    const bookPages = document.querySelector('input[name="bookPages"]').value;
    const bookRead = document.querySelector('input[name="bookRead"]').checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages,bookRead);
    event.preventDefault();
    displayLibrary();
};