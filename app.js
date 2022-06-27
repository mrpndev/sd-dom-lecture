// DOM

/* 
    Data representation of the objects that comprise the structure and content of a document on the web.

    Basic Structure:
    - Document
        - HTML
            - Head
                - Meta tags
                - Link tags
                - Title tag
            - Body
                - Nav
                - Header
                - Div's
                - H1's, img's, aside's and so on...
                - And any of their attributes
*/

// Creating our first element

// 1. use createElement method on a document object and specify the element you want to create. Assign it to a variable for future modification.

let h1 = document.createElement("h1")
h1.innerText = "My first DOM Element"
h1.style.color = "blue"
h1.className = "main-element"

document.body.appendChild(h1)

let h2 = document.createElement("h2")
h2.innerText = "New h2 element"
h2.style.color = "magenta"
h2.className = "main-element"
document.body.appendChild(h2)

/* 
HTMLCollection
- Array-like object
- Allows access to index, properties, and methods to help navigate and modify
- Does NOT allow to modify a group of elements all at once.
- Can loop through it
- Can use .length property to get the size of the list
To get element
- use array notation
- use .item() method
Accessing Multiple Elements requries these methods:
- querySelectorAll
- getElementsByClassName
- getElementsByTagName
*/

// .getElementsByTagName

let li = document.getElementsByTagName("li")
console.log(li)

// ! Showing NodeList not being live (length)
console.log(document.querySelectorAll("ul li"))


/* 
    We can't change attribute of many elements at once because it's an array-like object and not an individual li element.

    We must iterate over an iterable to get individual instances and change them as such.
*/

for (i of li) {
    i.style.color = "yellow"
    i.style.textAlign = "center"
}

// .querySelector()
/* 
    Grabs first instance of an element or null if not found
*/

let toDoList = document.querySelector("#listTitle")
toDoList.style.textAlign = "center"

// .querySelectorAll()
/* 
    NodeList returning static list of document's elements
*/

let newListItem = document.createElement("li")
let ulToDo = document.getElementById("ulToDo")
newListItem.innerText = "Dynamic vs Static"
ulToDo.appendChild(newListItem)

let link = document.getElementsByClassName("link")[0]

link.href = "https://replit.com"


// Creating paragraph element and appending it to the list id div tag.
let pTag = document.createElement("p")
let list = document.getElementById("list")
pTag.textContent = "This is my todo list."
list.appendChild(pTag)

// Event Listeners
/* 
    Event listener allows us to execute a function when a particular event occurs.
    - .addEventListener() takes an event and callback function
    - event - what happens
    - callback function - action tied to the event
*/
let button = document.getElementById("submit")

button.addEventListener("click", (event) => {
    let input = document.getElementById("listInput").value
    // Access parent element to the list items themselves
    // lives inside ulToDo variable

    // Create new list item element
    let newToDoItem = document.createElement("li")
    // Append input content into our list item element
    newToDoItem.textContent = input
    // Append new child element to the parent element
    ulToDo.appendChild(newToDoItem)

    // Extra Credit (making it look like the static values)
    newToDoItem.style.color = "yellow"
    newToDoItem.style.textAlign = "center"
})

let input = document.getElementById("listInput")

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        let input = document.getElementById("listInput").value
    // Access parent element to the list items themselves
    // lives inside ulToDo variable

    // Create new list item element
    let newToDoItem = document.createElement("li")
    // Append input content into our list item element
    newToDoItem.textContent = input
    // Append new child element to the parent element
    ulToDo.appendChild(newToDoItem)

    // Extra Credit (making it look like the static values)
    newToDoItem.style.color = "yellow"
    newToDoItem.style.textAlign = "center"

    }
})

