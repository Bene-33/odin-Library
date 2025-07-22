const myLibrary = []

function Book(ID, title, author, pages, read){
    if (!new.target) {
        throw Error("error use new operator")
    }
    this.id = ID;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function(){
        return this.title+" "+this.author+", "+this.pages+", "+this.read 
    }
}

function adBookToLibrary() {

}

const theHobbit = new Book("The Hobbit", "by J.R.R. Tolkien", "295 pages", "not read yet")

console.log(theHobbit.info())
console.log(myLibrary)