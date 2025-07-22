const myLibrary = []

function Book(title, author, pages, read, ID){
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
    let newBook = new Book(title,author,pages,read,crypto.randomUUID())
    myLibrary.push(newBook)

}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "yes")
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1238", "yes")
addBookToLibrary("No Logo!", "Naomi Klein", "295", "yes")
addBookToLibrary("The Witcher - the Last Wish", "Andrzej Sapkowski", "288", "no")


console.log(myLibrary)