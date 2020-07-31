'use strict';

// Write a script that creates a number of "div" elements. Each "div" element must have the following
//     * Random "width" and "height" between "20px" and "100px"
//     * Random "background-color"
//     * Random "color"
//     * Random "position" on the screen
//     * A "strong" element with text "div" inside the "div"
//     * Random "border-radius"
//     * Random "border-color"
//     * Random "border-width" between "1px" and "20px"

function createDiv() {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        document.body.prepend(document.createElement('div'));
        }
    let div = document.querySelectorAll('div');
    console.log(div);
    div.forEach(item => {
    item.style.color = randomColor();
    item.style.width = randomSize();
    item.style.height = randomSize();
    item.style.backgroundColor = randomColor();
    item.style.borderRadius = randomRadius();
    item.style.borderColor = randomColor();
    item.style.borderWidth = randomBorderWidth();
    item.style.position = position();
    item.innerHTML = "<strong>'div'</strong>";
    });
}

function randomColor() {
    let r = (Math.floor(Math.random() * 256));
    let g = (Math.floor(Math.random() * 256));
    let b = (Math.floor(Math.random() * 256));
    return "rgb(" + r + "," + g + "," + b + ")";
}
function randomSize() {
    let w = (Math.floor(Math.random() * 1000));
    return w + "px";
}
function randomRadius() {
    let r = (Math.floor(Math.random() * 101));
    return r + "%";
}
function randomBorderWidth() {
    let rbw = (Math.floor(Math.random() * 21));
    return rbw + "px";
}
function position() {
    let num = (Math.floor(Math.random() * 5));
    switch (num) {
        case 0: 
            num = 'absolute';
            break;
        case 1: 
            num = 'fixed';
            break;
        case 2:
            num = 'relative';
            break;
        case 3:
            num = 'static';
            break;
        case 4: 
            num = 'inherit';
            break;
    }
    return num;
}

createDiv();