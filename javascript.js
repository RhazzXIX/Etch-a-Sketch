const sketchbox = document.querySelector('#sketchbox');
const x30 = document.querySelector('#x30');
const x60 = document.querySelector('#x60');
const x100 = document.querySelector('#x100');

let num = 0;

x30.addEventListener('click', () => {
    unsketch();
    num = 30;
    sketch();
});

x60.addEventListener('click', () => {
    unsketch();
    num = 60;
    sketch();
});

x100.addEventListener('click', () => {
    unsketch();
    num = 100;
    sketch();
});

//function to create grid;
function sketch(){
    console.log(num);
    let size = 500/num;
    let grid = num*num;
    for(let i = 0; i < grid; i++) {
        const box = document.createElement('div');
        box.style.height = `${size}px`;
        box.style.width = `${size}px`;
        box.classList.add('box');
        sketchbox.appendChild(box);
    }
}

//function to remove grid;
function unsketch(){
    const boxes = document.querySelectorAll('.box');
    for(let i = 0; i < boxes.length; i++){
    sketchbox.removeChild(boxes[i]);
    }
}


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
