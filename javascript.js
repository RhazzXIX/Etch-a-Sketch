//html element selector
const sketchbox = document.querySelector('#sketchbox');
const size = document.querySelector('#size');
const body = document.querySelector('body');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
const rgb = document.querySelector('#rgb')
const clear = document.querySelector('#clear');
const shade = document.querySelector('#shade');

//variable to draw
let mousedown = false;
let randomColor = false;
let num = 0;
let darken = false;
let penColor = 'black';


//button to create canvas
size.addEventListener('click', () => {
    removeCanvass();
    num = prompt('Enter a number from 10 to 100', '');
    createCanvass();
    draw();
});


//function to create grid;
function createCanvass(){
    if (num === null) {
        return alert('Thanks! Just click the button if you want to draw.');
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
         createCanvass();
     }
}

//function to remove grid;
function removeCanvass(){
    const boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i++){
    sketchbox.removeChild(boxes[i]);
    }
}

//function to draw
sketchbox.addEventListener('mousedown', (e) => {
    mousedown = true;
}, capture = true);

body.addEventListener('mouseup', (e) => {
    mousedown = false;
    e.stopPropagation();
});

function draw() {
    const grid = document.querySelectorAll('.box');
        grid.forEach((div) => {
            let shade = 0;
        div.addEventListener('mousedown', (e) => {
            if (mousedown == true && randomColor == true) {
                r = createRandomColor();
                g = createRandomColor();
                b = createRandomColor();
                penColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = `${penColor}`;
            } else if (mousedown == true && darken == true) {
                if(shade < 1) {shade += 0.1;}
                penColor = `rgba(0,0,0,${shade})`;
                e.target.style.backgroundColor = `${penColor}`;
            } else if (mousedown == true) {
                e.target.style.backgroundColor = `${penColor}`; 
            } 
                e.stopPropagation();
        });
        div.addEventListener('mouseover', (e) => {
            if (mousedown == true && randomColor == true) {
                r = createRandomColor();
                g = createRandomColor();
                b = createRandomColor();
                penColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = `${penColor}` 
            } else if (mousedown == true && darken == true) {
                if(shade < 1) {shade += 0.1;}
                e.target.style.backgroundColor = `rgba(0,0,0,${shade})`;
            } else if (mousedown == true) {
                e.target.style.backgroundColor = `${penColor}` 
            }
            e.stopPropagation();
        }); 
    });
}    

//function to change Color
//added the draw function to reset shade

black.addEventListener('click', (e) =>{
    penColor = 'black';
    randomColor = false;
    darken = false;
    draw();
    e.stopPropagation();
});

eraser.addEventListener('click', (e) => {
    penColor = 'white';
    randomColor = false;
    darken = false;
    e.stopPropagation();
    draw();
});

rgb.addEventListener('click', (e) =>{
    randomColor = true;
    darken = false;
    e.stopPropagation();
    draw();
});

//function for random color
function createRandomColor () {
   return Math.floor(Math.random()*256);
}

//function for shading mode

shade.addEventListener('click', (e) =>{
    randomColor = false;
    darken = true;
    e.stopPropagation();
});


//function for Clear

clear.addEventListener('click', (e) => {
    removeCanvass();
    createCanvass();
    draw();
});