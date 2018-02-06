var dotArray = [];
var gridLines = [];
var redLines = [];
var blueLines = [];
var yellowLines = [];

//Line Creator
function createLine(id, coordX1, coordY1, coordX2, coordY2, color, lineWidth){
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('id', id);
    line.setAttribute('x1', coordX1);
    line.setAttribute('y1', coordY1);
    line.setAttribute('x2', coordX2);
    line.setAttribute('y2', coordY2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', lineWidth);
    return line;
}

//Dot Creator
function createDot(coordX, coordY, radius, lineColor, lineWidth, fillColor){
    var dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('cx', coordX);
    dot.setAttribute('cy', coordY);
    dot.setAttribute('r', radius);
    dot.setAttribute('stroke', lineColor);
    dot.setAttribute('stroke-width', lineWidth);
    dot.setAttribute('fill', fillColor);
    dot.setAttribute("onclick", selectDot(xoordX, coordY));
    return dot;
}

var svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgCanvas.setAttribute('id','svgCanvas');
svgCanvas.height=210;
svgCanvas.height=500;


function rippleAnimation(originX, originY){
    for(row in pointList){
        for (point in row){
            var animationTime = (Math.max(Math.abs(this.coordX-originX),Math.abs(this.coordY-originY)))
            //add dot to animation queue with animation time
        }
    }
    //activate animation queue
    //clear animation queue
}
document.getElementById('main').appendChild(svgCanvas);
document.getElementById('svgCanvas').appendChild(createLine('line2',100,100,200,200,'red',5.0));