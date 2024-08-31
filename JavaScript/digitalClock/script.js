let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let am_pm=document.getElementById("am_pm");

setInterval(() => {
    let date = new Date();
    console.log(date);
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    if(date.getHours()>=12){
        am_pm.innerHTML="PM";
    }else{
        am_pm.innerHTML="AM";
    }
}, 1000);

