let fetchData = document.getElementById("fetchData");
fetchData.addEventListener("click", eventHandler);

function eventHandler() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", './demo.txt', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log("Response:", this.responseText);
        }
        else {
            console.log("some error occur");
        }
    }

    xhr.send();
}

let fetchDataAPI=document.getElementById("fetchData2");
fetchDataAPI.addEventListener("click",addHandler);
function addHandler(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",'https://jsonplaceholder.typicode.com/todos',true);
    xhr.onload=function(){
        let data=JSON.parse(this.responseText);
        data.map((value)=>console.log(value.title));
    }
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
}
