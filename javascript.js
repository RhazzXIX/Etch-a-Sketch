const sketchbox = document.querySelector('#sketchbox');
const size = document.querySelector('#size');
const body = document.querySelector('body');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
const rgb = document.querySelector('#rgb')
const clear = document.querySelector('#clear');
const shade = document.querySelector('#shade');

//variable to draw
let draw = false;
let randomColor = false;
let num = 0;
let darken = false;


size.addEventListener('click', () => {
    removeCanvass();
    num = prompt('Enter a number from 10 to 100', '');
    createCanvass();
});


//function to create grid;
function createCanvass(){
    if (num === null) {
        return alert('Thanks! Come back again!');
     } else if (num >= 10 && num <= 100) {
         let size = 500/num;
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
         createCanvass(num);
     }
 }


//function to remove grid;
function removeCanvass(){
    const boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i++){
    sketchbox.removeChild(boxes[i]);
    }
}

//event to draw
sketchbox.addEventListener('mousedown', function (e) {
    draw = true;
    drawing();
    
}, true);

body.addEventListener('mouseup', function (e) {
    draw = false;
    e.stopPropagation();
}, true);

//function for drawing
function drawing() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        let a = 0;
        div.addEventListener('mousedown', (e) => {
            if (draw == true && randomColor == true) {
                r = createRandomColor();
                g = createRandomColor();
                b = createRandomColor();
                penColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = `${penColor}`;
            } else if (draw == true && darken == true) {
                a += 0.1;
                penColor = `rgba(0,0,0,${a})`;
                e.target.style.backgroundColor = `${penColor}`;
            } else if (draw == true) {
                e.target.style.backgroundColor = `${penColor}`; 
            } 
                e.stopPropagation();
        });
        div.addEventListener('mouseover', (e) => {
            if (draw == true && randomColor == true) {
                r = createRandomColor();
                g = createRandomColor();
                b = createRandomColor();
                penColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = `${penColor}` 
            }  else if (draw == true && darken == true) {
                a +=0.1
                e.target.style.backgroundColor = `rgba(0,0,0,${a})`;
                console.log(a);
            } else if (draw == true) {
                e.target.style.backgroundColor = `${penColor}` 
            }
                e.stopPropagation();
        }); 
    });
}


//function to change Color

let penColor = 'black'

black.addEventListener('click', (e) =>{
    penColor = 'black';
    randomColor = false;
    darken = false;
    e.stopPropagation();
    console.log(a);
    a = 0;
});

eraser.addEventListener('click', (e) => {
    penColor = 'white';
    randomColor = false;
    darken = false;
    e.stopPropagation();
    a = 0;
});

rgb.addEventListener('click', (e) =>{
    randomColor = true;
    darken = false;
    e.stopPropagation();
});

//function for random color
function createRandomColor () {
   return Math.floor(Math.random()*256);
}

//function for darken mode

shade.addEventListener('click', (e) =>{
    randomColor = false;
    darken = true;
});


//function for Clear

clear.addEventListener('click', clean);

function clean() {
    const boxes = document.querySelectorAll('.box');
    a = 0;
    boxes.forEach((div) => {
        div.style.backgroundColor = "white"
    });
}

