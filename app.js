function run(){
    document.getElementById("paragraph").innerHTML = "Hello World!";

    document.getElementById("paragraph").style.backgroundColor = "green";

    document.getElementById("paragraph").style.color = "#ffffff";

    document.getElementById("paragraph").style.padding = "20px";

    randomNum();

    getUserNum();

    compareNumbers()
}

function randomNum(){

    let ran = Math.floor(Math.random() * 10);

    let x = document.getElementById("random");

    x.innerHTML = ran;

    x.style.backgroundColor = "blue";

    x.style.color = "#ffffff";

    x.style.padding = "20px";

    x.style.textAlign = "center";

    return ran;

}

function getUserNum(){

    let user = document.getElementById("getNumber").value;

    let y = document.getElementById("userNumber")

    y.innerHTML = user;

    y.style.color = "white";

    y.style.backgroundColor = "#ff00e2";

    y.style.padding = "20px";

    y.style.textAlign = "center";

    return user;
}

function compareNumbers() {

    let a = getUserNum();

    let b = randomNum();

    let z = document.getElementById("compare")

    if(a != b){
        z.innerHTML = "Numbers are not the same. The computer got " + b + " and user got " + a;

        z.style.color = "white";

        z.style.backgroundColor = "#ff0000";
    
        z.style.padding = "20px";
    
        z.style.textAlign = "center";

    } else if (a == b){
        z.innerHTML = "Numbers are the same. The computer got " + b + " and user got " + a;

        z.style.color = "white";

        z.style.backgroundColor = "#00ff00";
    
        z.style.padding = "20px";
    
        z.style.textAlign = "center";
    }
}