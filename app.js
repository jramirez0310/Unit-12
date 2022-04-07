let userNum = document.getElementById("getNumber")

userNum.addEventListener("keydown", function (e){
    if (e.keyCode == 13){
        run(e);
    }
})

userNum.focus();

let counter = 0;

function run(){

    randomNum();

    getUserNum();

    compareNumbers()
}

function randomNum(){

    let ran = Math.floor(Math.random() * 10);

    let x = document.getElementById("random");

    return ran;

}

function getUserNum(){

    let user = document.getElementById("getNumber").value;

    let y = document.getElementById("userNumber")

    return user;
}

function compareNumbers() {

    let a = getUserNum();

    let b = randomNum();

    let z = document.getElementById("compare")

    let c = document.getElementById("counter")

    if(a != b){
        z.innerHTML = "Numbers are not the same. The computer got " + b + " and user got " + a;

        z.style.color = "white";

        z.style.backgroundColor = "#ff0000";
    
        z.style.padding = "20px";
    
        z.style.textAlign = "center";

        counter++

        c.innerHTML = "You have tried " + counter + " times."

        c.style.color = "white";

        c.style.backgroundColor = "#312f2f";
    
        c.style.padding = "20px";
    
        c.style.textAlign = "center";

        document.querySelector("body").style.backgroundColor = "rgb(207, 109, 109)"

    } else if (a == b){
        z.innerHTML = "Numbers are the same. The computer got " + b + " and user got " + a;

        z.style.color = "white";

        z.style.backgroundColor = "#00ff00";
    
        z.style.padding = "20px";
    
        z.style.textAlign = "center";

        c.innerHTML = "You have tried " + counter + " times to get it right."

        c.style.color = "white";

        c.style.backgroundColor = "#312f2f";
    
        c.style.padding = "20px";
    
        c.style.textAlign = "center";

        counter = 0

        document.querySelector("body").style.backgroundColor = "rgb(107, 214, 127)"
    }

    resetInput();
}

function resetInput(){
    document.getElementById("getNumber").value = "";
}