console.log("this is running");

// creating a book constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

// adding prototype to display
Display.prototype.add = function (book) {
    console.log("adding")
    let tbody = document.getElementById("tbody")
    let ustr = ` <tr>
    
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`

    tbody.innerHTML += ustr
}

Display.prototype.clear = function () {
    let form = document.getElementById("form")
    form.reset()
}

Display.prototype.validate = function(book){
    if (book.name.length < 3 || book.author.length <3){
        return false
    }
    else{
        return true
    }
}

Display.prototype.show = function(type, message){
    msg = document.getElementById("msg")
    msg.innerHTML = `
    <div class="alert alert- alert-${type} fade show" role="alert">
    <strong>${message}</strong> 
  </div>
         `

    setTimeout(function(){
        msg.innerHTML = ``
    }, 5000)
}

// form add event listener
let form = document.getElementById("form")
form.addEventListener("submit", formSubmit)

function formSubmit(e) {
    let name = document.getElementById("bookName").value
    let author = document.getElementById("author").value
    let type
    let romantic = document.getElementById("romantic")
    let thriller = document.getElementById("thriller")
    let program = document.getElementById("programming")
    if (romantic.checked) {
        type = romantic.value
    }
    else if (thriller.checked) {
        type = thriller.value
    }
    else if (program.checked) {
        type = programming.value
    }
    let book = new Book(name, author, type)
    let display = new Display()
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success', 'your book has been added')
    }
    else{
        display.show('danger', 'your book has not been added')
    }
    e.preventDefault()
    console.log(book.name)
}