'use strict';
for (let i = 0; i < 5; i++) {
    document.body.prepend(document.createElement('div'));
}
const div = document.querySelectorAll('div');

div.forEach((item, i) => {
    item.style.cssText = 'border: solid 2px red; width: 100px; height: 100px; margin: 10px; background-color: yellow;';
    item.textContent = `${i+1}`;
    let timer = setInterval(() => document.body.insertBefore(div[0], div[5]), 1000);
    let timer1 = setInterval(() => document.body.insertBefore(div[1], div[5]), 1010);
    let timer2 = setInterval(() => document.body.insertBefore(div[2], div[5]), 1020);
    let timer3 = setInterval(() => document.body.insertBefore(div[3], div[5]), 1030);
    let timer4 = setInterval(() => document.body.insertBefore(div[4], div[5]), 1040);
    console.log(item);
});
//подругому реализовать не смог



