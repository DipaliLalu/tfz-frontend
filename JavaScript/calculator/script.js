let input_box = document.getElementById("input-box");
let buttons = document.querySelectorAll('button');
let btnarray = Array.from(buttons);
let str = "";
// console.log(btnarray);

btnarray.forEach(btn => {
    // console.log(btn.innerHTML)

    btn.addEventListener("click", (e) => {
        //    console.log(str);

        if (e.target.innerHTML == "AC") {
            str = "";
            input_box.value = str;

        } else if (e.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
            // console.log(str);
            input_box.value = str;

        } else if (e.target.innerHTML == "=") {
            str = eval(str);
            input_box.value = str;

        }
        else {
            str += e.target.innerHTML;
            input_box.value = str;

        }

    })
})

