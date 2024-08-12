// localStorage.setItem('todo','')
let textValue = document.getElementById('text');
let task = document.querySelector('.task-list');
let array = [];
window.onload = () => {
    if(localStorage.getItem('todo')!==""){
        array.push(localStorage.getItem('todo'));
        display();
    }
}

let getData = localStorage.getItem('todo');
// console.log(getDta);
function saveTask() {
    
    if (textValue.value == "") {
        alert("please enter task");
    } else if (getData.split(',').includes(textValue.value)) {
        alert("please enter unique value");
    }
    else {
        array.push(textValue.value);
        console.log(array);
        localStorage.setItem('todo', array);
        textValue.value = ""; 
    }

}

// console.log(getData.split(','));
function display() {
    let set = new Set(getData.split(','));
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

