'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let left = document.querySelector('.leftArr'),
          right = document.querySelector('.rightArr'),
          image = document.querySelectorAll('.img img');

    let count = 0;

    left.addEventListener('click', () => {
        image[count].style.display = 'none';
        count -= 1;
        if(count < 0){
            count = image.length - 1;
        }
        image[count].style.display = 'block';
    });

    right.addEventListener('click', () => {
        image[count].style.display = 'none';
        count += 1;
        if(count >= image.length){
            count = 0;
        }
        image[count].style.display = 'block';
    });
});