var dotArray = [];
var gridLines = [];
var redLines = [];
var blueLines = [];
var yellowLines = [];
var spacing = 50;
var offset = 10

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
     //document.getElementById('svgCanvas').appendChild(line)
    return line;
}

//Dot Creator
function createDot(id, coordX, coordY, radius, lineColor, lineWidth, fillColor){
    var dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('id',id);
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
    document.getElementById('main').appendChild(svgCanvas);
    
    //Create Correct Number of Line Objects
    for(x=0; x<=size; x++){
        var lineID = 'v'+x;
        gridLines.push(createLine(lineID, x*spacing+offset,0+offset,x*spacing+offset,size*spacing+offset,'#A8A8A8',1))
    }
    for (y=0; y<=size; y++){
        var lineID = 'h'+y;
        gridLines.push(createLine(lineID,0+offset,y*spacing+offset,size*spacing+offset, y*spacing+offset,'#A8A8A8',1))
    }
    drawGrid();
}

//Creates the Dot Array based on size
function createDotArray(size){
    for(x=0;x<=size;x++){
        for(y=0;y<=size;y++){
            var name = 'h'+x+'|v'+y;
            dotArray.push(createDot(name,x*spacing+offset,y*spacing+offset,5,'black',2,'white'))
            drawDots();
        }
    }
}

//Draws the Grid
function drawGrid(){
    for(line in gridLines){ 
        document.getElementById('svgCanvas').appendChild(gridLines[line])
    }
}

//Draws the Dot Array
function drawDots(){
    for(dot in dotArray){
        document.getElementById('svgCanvas').appendChild(dotArray[dot])
    }
}


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
createGrid(23);
createDotArray(23);
