let button = document.getElementById("button-1");
let paragraphs = document.getElementsByClassName("paragraphs");


function changeColor() {
    let colors = ['red', 'green', 'blue', 'purple', 'orange', "black"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraphs[0].style.color = randomColor;
    paragraphs[1].style.color = randomColor;
    paragraphs[2].style.color = randomColor;
}

button.addEventListener("click", changeColor)