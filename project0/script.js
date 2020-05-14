/*
 * My bad attempt at javascript code, don't judge the quality of the code
 * I'm tryna learn okay?

 * */

// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

itemCountSpan.value = 0

function newTodo() {
    const list  = document.querySelector('ul')
    const input = window.prompt('Enter your todo')
    const input_text = document.createElement('span')
    const checkbox_todo = document.createElement("INPUT")
    checkbox_todo.setAttribute("type", "checkbox")
    // const button = document.querySelector('button')
    const listItem = document.createElement('li')
    const buttonz = document.createElement('button')
    buttonz.textContent = "Delete"

    listItem.appendChild(input_text)
    listItem.appendChild(checkbox_todo)
    listItem.appendChild(buttonz)
    input_text.textContent = input
    list.appendChild(listItem)
    itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1;
    uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
    // list.appendChild(button)
    //
    //

        buttonz.onclick = function(e) {
        list.removeChild(listItem)
        itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1;
        if (itemCountSpan.innerHTML <= 0 ){
            itemCountSpan.innerHTML = 0
        }

    }

    checkbox_todo.onchange = function(e){
        uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1

        itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1;
    }
    
}

// function deleteTodo(){
//     list.removeChild(listItem)
//     itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1;
// }
