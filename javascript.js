const myLibrary = []

function book(title, author, pages, read, ID){
    if (!new.target) {
        throw Error("error use new operator")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = ID;
}

function addBookToLibrary(title, author, pages, read, ID) {
    let newBook = new book(title,author,pages,read,crypto.randomUUID())
    myLibrary.push(newBook)

}

const newBookButton = document.querySelector("#newBookButton")

newBookButton.onclick = () => addBookToLibrary()

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "yes")
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1238", "yes")
addBookToLibrary("No Logo!", "Naomi Klein", "295", "yes")
addBookToLibrary("The Witcher - the Last Wish", "Andrzej Sapkowski", "288", "no")


console.log(myLibrary)

for (let i = 0; i < book.length-1; i++){
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
    title.textContent = "Title: " + myLibrary[i].title
    author.textContent = "Autohr: " + myLibrary[i].author;
    pages.textContent = "Pages: " + myLibrary[i].pages;
    read.textContent = "Read? " + myLibrary[i].read;
    books.appendChild(bookContainer);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
}

