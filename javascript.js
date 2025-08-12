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

//toggle the books Read Status
book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read, ID) {
    let newBook = new book(title,author,pages,read,crypto.randomUUID())
    myLibrary.push(newBook)
};

//display new book to library
function displayLibrary(){
    removeOldLibrary();
    for (let i = 0; i < myLibrary.length; i++){
        const books = document.querySelector(".books");

        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");
        
        const title = document.createElement("div");
        title.textContent = "Title: " + myLibrary[i].title;

        const author = document.createElement("div");
        author.classList.add("booksAuthor");
        author.textContent = "Autohr: " + myLibrary[i].author;

        const pages = document.createElement("div");
        pages.classList.add("booksPages");
        pages.textContent = "Pages: " + myLibrary[i].pages;

        const read = document.createElement("button");
        read.classList.add("booksRead");
        read.textContent = `Read? ${myLibrary[i].read ? "read!" : "not read"}`;
        read.onclick = function() {
            myLibrary[i].toggleReadStatus();
            read.textContent = `Read ? ${myLibrary[i].read ? "read!" : "not read"}`;
        };
        
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("removeBookButton");
        removeBookButton.textContent ="remove";
        removeBookButton.setAttribute("data-id", myLibrary[i].id);
        removeBookButton.onclick = function() {
            removeBook(this.getAttribute("data-id"));
        };

        books.appendChild(bookContainer);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(read);
        bookContainer.appendChild(removeBookButton);
    };
    console.log(myLibrary)
};

// remove old displayed library
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
    newBookModal.close();
};

//remove book from the library
function removeBook(id){
    const selectedBook = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(selectedBook, 1);
    displayLibrary();
};

