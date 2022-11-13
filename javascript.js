const sketchbox = document.querySelector('#sketchbox');

let num = prompt('Enter a number from 10 to 100', '');


function sketch(num){
    console.log(num);
    if (num === null) {
       return alert('Thanks! Come back again!');
    } else if (num >= 10 && num <= 100) {
        let size = 300/num;
        let grid = num*num;
        

        for(let i = 0; i < grid; i++) {
            let div = document.createElement('div');
            div.style.height = `${size}px`;
            div.style.width = `${size}px`;
            div.classList.add('box');
            sketchbox.appendChild(div);
        }
    } else {
        num = prompt('Numbers from 10 to 100 only', '');
        sketch (num);
    }
};

sketch(num);
const boxes = document.querySelectorAll('.box')

//function to start drawing

sketchbox.addEventListener('mousedown', function (e) {
    draw(e);
}, true);


//function to add draw
function draw(e) {
    boxes.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
            div.style.background = 'black';
            console.log(e);
        }, false);   
    }) ;
}

//function to stop drawing
sketchbox.addEventListener('mousedown', function (e) {
    undraw(e);
    console.log('triggered');
}, true);

//function to remove drawing
function undraw(e) {
    boxes.forEach((div) => {
        div.removeEventListener('mouseover', function (e) {
            div.style.background = 'black';
            console.log(e);
        }, false);   
    }) ;
}
