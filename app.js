function run(){
    document.getElementById("paragraph").innerHTML = "Hello World!";

    document.getElementById("paragraph").style.backgroundColor = "green";

    document.getElementById("paragraph").style.color = "#ffffff";

    document.getElementById("paragraph").style.padding = "20px";

    randomNum();
}

function randomNum(){

    let ran = Math.floor(Math.random() * 10);

    let x = document.getElementById("random");

    x.innerHTML = ran;

    x.style.backgroundColor = "blue";

    x.style.color = "#ffffff";

    x.style.padding = "20px";

    x.style.textAlign = "center";

}