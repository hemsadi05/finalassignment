const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const heading1 = document.getElementById('heading1');
const box = document.getElementById('box');
let isBoxVisible = true;

btn3.addEventListener('click', function () {
    heading1.textContent = "Hi i am Hemsadi";
})

btn2.addEventListener('click', hidebox);
function hidebox() {
    if (isBoxVisible == true) {
        box.style.display = "none";
        isBoxVisible = false;
    } else {
        box.style.display = "block";
        
        isBoxVisible = true;
    }
}
btn1.addEventListener('click', function() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    box.style.backgroundColor = "#" + randomColor;
})