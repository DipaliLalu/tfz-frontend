let textValue = document.getElementById('text');
let task = document.querySelector('.task-list');
let count=0;

window.onload = () => {
    count = localStorage.length;
    display();
};

function saveTask() {
    if (textValue.value == "") {
        alert("please enter task");
    }
    else {
         count = count + 1;
        // console.log(count)
        localStorage.setItem(count, textValue.value);
        // let getValue = localStorage.getItem(count);
        // console.log(getValue);
        textValue.value="";     
        return count;
    }
    
}

function display(){
    for (let index = 1 ; index <= localStorage.length; index++) {
    //   console.log(localStorage.getItem(index));
      let get=localStorage.getItem(index);
      let newElement = document.createElement("li");
    //   newElement.id=index;
      newElement.innerHTML = `<div>${get}</div>
      <button class="btn btn-delete" onClick="reply_click(this.id)" id="${index}">Delete</button>`;
      task.appendChild(newElement);
    }
}


function reply_click(e) {
 console.log(`Button ID: ${e}`)
 localStorage.removeItem(e)
}

