
let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");
let display_Minute = document.querySelector("#min");
let display_Second = document.querySelector("#sec");

let counter = 0;
let myMinutes = 0;
let mySeconds = 0;
let myTimer;

startBtn.addEventListener("click", function(){
    clearInterval(myTimer);
        myTimer = setInterval(function(){
        counter++;
        mySeconds = counter;
        display_Second.innerHTML = mySeconds;
        // For Second Display
        if(mySeconds > 59){
            counter = 0;
            display_Second.innerHTML = "00";
            myMinutes++;
        }
        else if(mySeconds > 9){
            display_Second.innerHTML = mySeconds;
        }
        else{
            mySeconds = "0" + mySeconds;
            display_Second.innerHTML = mySeconds;
        }

        //For Minute Display

        
        if(myMinutes > 59){
            display_Minute.innerHTML = "00";
            display_Second.innerHTML = "00";
            counter = 0;
            myMinutes = 0;
            mySeconds = 0;
        }
        else if(myMinutes > 9){
            display_Minute.innerHTML = myMinutes;
        }
        else{
            display_Minute.innerHTML = "0" + myMinutes;
        }


    }, 1000)
})

stopBtn.addEventListener("click", function(){
    clearInterval(myTimer);
})

resetBtn.addEventListener("click", function(){
    clearInterval(myTimer);
    display_Minute.innerHTML = "00";
    display_Second.innerHTML = "00";
    counter = 0;
    myMinutes = 0;
    mySeconds = 0;
})