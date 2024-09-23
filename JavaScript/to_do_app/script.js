// localStorage.setItem('todo','')
let textValue = document.getElementById('text');
let task = document.querySelector('.task-list');
//get data from localstroage
let array = JSON.parse(localStorage.getItem('todo')) || [];

window.onload = () => {
    display();
}
//save task in localstroage
function saveTask() {
    let newTask = textValue.value.trim();

    if (newTask === "" || array.includes(newTask)) {
        alert("please enter unique task");
    }
    else {
        array.push(textValue.value.trim());
        localStorage.setItem('todo', JSON.stringify(array));
    }
}
//display all task from localstroage
function display() {
    array.forEach((element) => {
        let newElement = document.createElement("li");
        newElement.innerHTML = `<div class="overflow">${element}</div>
        <i class="fa-solid fa-trash-can"></i>`;
        task.appendChild(newElement);
        newElement.querySelector('.fa-trash-can').addEventListener('click', (e) => remove(e));
    })
}
//remove the task 
function remove(e) {
    let data = e.target;
    let deleteData = data.previousElementSibling.textContent;
    let update = array.filter((value) => {
        return value !== deleteData;
    });
    localStorage.setItem('todo', JSON.stringify(update));
    e.target.parentElement.remove();
    location.reload();
}
//delete all task from localstroage
function allDataDelete() {
    localStorage.removeItem('todo');
    location.reload();
}

