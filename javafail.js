//function to start drawing

sketchbox.addEventListener('mousedown', function (e) {
    draw(e);
}, true);


//function to add draw
function draw(e) {
    boxes.forEach((div) => {
        div.addEventListener('mousedown' && 'mouseover', function (e) {
            div.style.background = 'black';
            console.log(e.target);
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



