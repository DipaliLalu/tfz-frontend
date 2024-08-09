let textValue=document.getElementById('text');
let task=document.querySelector('.task-list');
function saveTask(){
    if(textValue.value==""){
        alert("please enter task");
    }
    else{
        let newElement=document.createElement("li");
        newElement.innerHTML=`<div class="tasks">${textValue.value}</div> <div class="d-flex gap-4 mt-1">  <i class="fa-solid fa-trash-can"></i>  <i class="fa-regular fa-pen-to-square"></i></div>`;
        task.appendChild(newElement);
        textValue.value="";
        newElement.querySelector(".fa-trash-can").addEventListener("click",remove);
        function remove(){
            newElement.remove();
        }
        newElement.querySelector('.fa-pen-to-square').addEventListener("click",edit)
        function edit(){
            let Edit=this.parentElement;
            let edit=Edit.parentElement;
            edit.contentEditable = true;
        }
    }
    // console.log("hello")
    // console.log(textValue.value)
}