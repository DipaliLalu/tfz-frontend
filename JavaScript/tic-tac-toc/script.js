let btns = document.getElementsByClassName("col");
// console.log(btn);
let currentPlayer = "X";
let array = Array(9).fill("null");
const arr = Array.from(btns);

arr.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btn.innerHTML = currentPlayer;
        array[index] = currentPlayer;
        console.log(array);
        if ((array[0] == array[1] && array[1] == array[2])) {
            alert(currentPlayer + "is win");}
        else if((array[3] == array[4] && array[4] == array[5])){alert(currentPlayer + "is win");}
        currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X";
    })
})

