// localStorage.setItem('todo','')
let textValue = document.getElementById('text');
let task = document.querySelector('.task-list');
let array = [];
// console.log(array)
window.onload = () => {
    if (localStorage.getItem('todo') !== "") {
        array.push(localStorage.getItem('todo'));
        display();
        // console.log(array)
    }
}

let getData = localStorage.getItem('todo');
// console.log(getData);

function saveTask() {
    if (textValue.value == "" || textValue.value.trim() == "") {
        // alert("hello");
        alert("please enter task");
    }
    else if (localStorage.getItem('todo').split(',').includes(textValue.value)) {
        alert("please enter unique value");
    }
    else {
        // array=[];
        array.push(textValue.value.trim());
        localStorage.setItem('todo', array);
        // textValue.value = "";
    }
}

// console.log(getData.split(','));
function display() {
    let set = new Set(getData.split(','));
    set.delete('');
    set.forEach((element) => {
        let newElement = document.createElement("li");
        newElement.innerHTML = `<div>${element}</div>
        <i class="fa-solid fa-trash-can"></i>`;
        task.appendChild(newElement);
        newElement.querySelector('.fa-trash-can').addEventListener('click', (e) => remove(e));
        // console.log(element);
    })
}

function remove(e) {
    let data = e.target;
    let deleteData = data.previousElementSibling.textContent;
    //    console.log(getData);
    let update = getData.split(',').filter((value) => {
        return value !== deleteData;
    });
    console.log(update);
    // localStorage.removeItem('todo');
    localStorage.setItem('todo', update);
    e.target.parentElement.remove();
    location.reload();
    // console.log(update);
}

function allDataDelete() {
    localStorage.removeItem('todo');
    location.reload();
}

