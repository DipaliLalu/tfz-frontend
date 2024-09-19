let btns = document.getElementsByClassName("col");
// console.log(btn);
let currentPlayer = "X";
let array = Array(9).fill('');
console.log(array);
const arr = Array.from(btns);

function check() {
    if ((array[0] !== "" && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] !== "" && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] !== "" && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] !== "" && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] !== "" && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] !== "" && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] !== "" && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] !== "" && array[2] == array[4] && array[4] == array[61])
    ) {
        alert(currentPlayer + " is winner");
        location.reload();
    }

    if (!array.some((e) => e == "")) {
        alert("Game is Draw!!");
        location.reload();
    }
}

arr.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (array[index] !== "") {
            return;
        }
        btn.innerHTML = currentPlayer;
        array[index] = currentPlayer;
        check();
        currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X";
    })
})

function reset(){
    location.reload();
}

