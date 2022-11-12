const sketchbox = document.querySelector('#sketchbox');

const num = 16;


function sketch(num){
    let size = 400/num;
    let grid = num*num;
    

    for(let i = 0; i < grid; i++) {
        let div = document.createElement('div');
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        div.classList.add('box');
        sketchbox.appendChild(div);

    };
};
sketch(num);
const boxes = document.querySelectorAll('.box')

//event to start drawing
sketchbox.addEventListener('mousedown', (e) => {
    draw(e);
});

sketchbox.addEventListener('mouseup', (e) => {
    undraw(e);
});



//function to start drawing
function draw(e) {
    boxes.forEach((div) => {
        div.addEventListener('mouseover', test(e));
    });
}

function test(e){
    console.log(e.target);
}


function undraw(e) {
    boxes.forEach((div) => {
        div.removeEventListener('mouseover', test);
    });
}
