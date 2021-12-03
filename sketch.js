let x=50;
let y=50;
let yvelocity=5;
let xvelocity=5;

function setup() {
    createCanvas(400,600);
    
    
}

function draw() {
    background(51);
    fill(235, 14, 95);
    ellipse(x,y,50,50);
    if(y>585||y<15){
        yvelocity=yvelocity*-1;
    }
    if(x>385|| x<15){
        xvelocity=xvelocity*-1
    }
    x=x+xvelocity;
    y=y+yvelocity;
    
}