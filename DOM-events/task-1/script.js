'use strict';

// Create a Simple JS Carousel with N images and two arrows for image control 

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