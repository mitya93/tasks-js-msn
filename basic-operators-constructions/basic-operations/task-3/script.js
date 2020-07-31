'use strict';

function calcVol() {
    let r = +prompt('Введите радиус цилиндра', '');
        while (r == null || r == '' || isNaN(r)) {
            r = +prompt('Введите радиус цилиндра', '');
    } 
    let h = +prompt('Введите высоту цилиндра', '');
    while (r == null || r == '' || isNaN(r)) {
        r = +prompt('Введите высоту цилиндра', '');
    }
    let V = Math.PI * r * 2 * h;
    let S = 2 * Math.PI * r * (r + h);
    
    return alert(`Объем цилиндра = ${V.toFixed(3)}\r\nПлошадь поверхности цилиндра = ${S.toFixed(3)}`);
}

let taskQuestion = confirm('Хотите рассчитать радиус и площадь цилиндра?');

if (taskQuestion == true) {
    calcVol();
} else {
    alert('Жаль, что вы не попробовали мою программу:(');
}