"use strict";

var dotArray = [];
var gridLines = [];
var redLines = [];
var blueLines = [];
var yellowLines = [];
var spacing = 50;
var offset = 10;

//Line Creator
function createLine(id, className, coordX1, coordY1, coordX2, coordY2, color, lineWidth){
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('id', id);
    line.setAttribute('class', className);
    line.setAttribute('d', 'M' + coordX1 + ' ' + coordY1 + ' L' + coordX2 + ' ' + coordY2 + ' Z')
    //line.setAttribute('x1', coordX1);
    //line.setAttribute('y1', coordY1);
    //line.setAttribute('x2', coordX2);
    //line.setAttribute('y2', coordY2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', lineWidth);
     //document.getElementById('svgCanvas').appendChild(line);
    return line;
}


//Dot Creator
function createDot(id, className, coordX, coordY, radius, lineColor, lineWidth, fillColor){
    var dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('id', id);
    dot.setAttribute('class', className);
    dot.setAttribute('cx', coordX);
    dot.setAttribute('cy', coordY);
    dot.setAttribute('r', radius);
    dot.setAttribute('stroke', lineColor);
    dot.setAttribute('stroke-width', lineWidth);
    dot.setAttribute('fill', fillColor);
    
    //dot.setAttribute("onclick", selectDot(xoordX, coordY));
    return dot;
}

//Grid Creator
function createGrid(size){
    //Create Canvas
    var svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCanvas.setAttribute('id','svgCanvas');
    svgCanvas.setAttribute('height',(spacing*size+offset*2));
    svgCanvas.setAttribute('width',(spacing*size+offset*2));
    svgCanvas.setAttribute("stroke", 2);
    document.getElementById('main').appendChild(svgCanvas);
    
    //Create Correct Number of Line Objects
    for(var x=0; x<=size; x++){
        var lineID = 'v'+x;
        gridLines.push(createLine(lineID, 'vGrid', x*spacing+offset,0+offset,x*spacing+offset,size*spacing+offset,'#A8A8A8',1));
    }
    for (var y=0; y<=size; y++){
        var lineID = 'h'+y;
        gridLines.push(createLine(lineID,'hGrid',0+offset,y*spacing+offset,size*spacing+offset, y*spacing+offset,'#A8A8A8',1));
    }
    drawGrid();
}

//Creates the Dot Array based on size
function createDotArray(size){
    for(var x=0;x<=size;x++){
        for(var y=0;y<=size;y++){
            var idName = 'h'+x+'|v'+y;
            dotArray.push(createDot(idName,'dot',x*spacing+offset,y*spacing+offset,5,'black',2,'white'));
            drawDots();
        }
    }
}

//Draws the Grid
function drawGrid(){
    for(var line in gridLines){
        document.getElementById('svgCanvas').appendChild(gridLines[line]);
    }
    //Set Grid Drawing Animation
    //var path = document.querySelector('.vGrid');
    //var length = path.getTotalLength();
    //path.style.strokeDasharray = lenght+' '+length;
    //path.style.strokeDashoffset = length;
}

//Draws the Dot Array
function drawDots(){
    for(var dot in dotArray){
        document.getElementById('svgCanvas').appendChild(dotArray[dot]);
    }
}
createGrid(11);
createDotArray(11);