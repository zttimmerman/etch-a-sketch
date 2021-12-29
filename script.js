const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const sizeBtn = document.querySelector("#change-size");
const rainbow = document.querySelector("#rainbow");
let divList = "";
let rainbowMode = false;

function toggleRainbow(e) {
    if (rainbowMode === false) {
        rainbowMode = true;
    } else {
        rainbowMode = false;
    }
}

function changeColor(e) {
    if (rainbowMode === false) {
        e.target.style.backgroundColor = "grey"
    } else if (rainbowMode === true){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }
}

for (let i = 0; i < 256; i++) {
    divList += "<div class='box'></div>";
}

container.innerHTML = divList;

let box = document.querySelectorAll(".box");

for(let i = 0; i < 256; i++) {
    box[i].addEventListener("mouseover", changeColor);
}

reset.addEventListener("click", resetGrid);
sizeBtn.addEventListener("click", changeSize);
rainbow.addEventListener("click", toggleRainbow);


function resetGrid(e) {
    for(const boxes of box) {
        boxes.style.backgroundColor = "white";
    }
}

function changeSize(e) {
    let size = prompt("Enter new squares per side for grid: 1-100");
    if (size >=1 && size <= 100) {
        container.innerHTML = "";
        divList = "";
        for (let i = 0; i < (size * size); i++) {
            divList += "<div class='box'></div>";
        }
        container.innerHTML = divList;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        box = document.querySelectorAll(".box");
        for (const boxes of box) {
            boxes.addEventListener("mouseover", changeColor);
        }
    }
}

