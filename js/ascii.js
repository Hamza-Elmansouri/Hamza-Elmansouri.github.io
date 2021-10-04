
window.onload = function() {
    document.getElementById("start").onclick = setTimer;
    document.getElementById("stop").onclick = stop;
    document.getElementById("animation").onchange = animation;
    document.getElementById("fontsize").onchange = fontSize;
    document.getElementById("turbo").onchange = turbo;
};


let i = 0;
let frame = null;
let animate = [];
let timer = null;

function start() {
    document.getElementById("text-area").value = animate[i];
    if (i < animate.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("turbo").disabled = false;
}

function setTimer() {
    if (timer == null) {
        timer = setInterval(start, 250);
    }
}

function stop() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = frame;
    i = 0;
}

function animation() {
    document.getElementById("start").disabled = false;
    let animation = document.getElementById("animation").value;
    animate = ANIMATIONS[animation].split("=====\n");

    frame = ANIMATIONS[animation];

    document.getElementById("text-area").value = ANIMATIONS[animation];


}

function fontSize() {
    let text = document.getElementById("text-area");
    //Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
    let fontS = document.getElementById("fontsize").value;
    switch(fontS){
        case "Tiny":
            text.style.fontSize = "7pt"
            break;
        case "Small":
            text.style.fontSize = "10pt"
            break;
        case "Medium":
            text.style.fontSize = "12pt"
            break;
        case "Large":
            text.style.fontSize = "16pt"
            break;
        case "Extra Large":
            text.style.fontSize = "24pt"
            break;
        case "XXL":
            text.style.fontSize = "32pt"
            break;
    }
}

function turbo() {
    let check = document.getElementById("turbo").checked;
    clearInterval(timer);
    if (check){
        timer = setInterval(start, 50);
    }else{
        timer = setInterval(start, 250);
    }
}