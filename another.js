show()
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

    let bookObj = {
        name: name,
        author: author,
        type: type
    }
    list = localStorage.getItem("booklist")
    if (list == null) {
        listObj = []
    }
    else {
        listObj = JSON.parse(list)
    }
    listObj.push(bookObj)
    list = localStorage.setItem("booklist", JSON.stringify(listObj))
    clear()
    show()

    e.preventDefault();
}
function show() {
    list = localStorage.getItem("booklist")
    if (list == null) {
        listObj = []
    }
    else {
        listObj = JSON.parse(list)
    }
    tbody = document.getElementById("tbody")
    let str ="" 
    listObj.forEach(function (element, index) {
        
        str = ` <tr>
    
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
      </tr>`
    })
    tbody.innerHTML += str
}
function clear() {
    let form = document.getElementById("form")
    form.reset()
}