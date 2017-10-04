var sizeX = 15;
var sizeY = 15;
var timeDelay = 0.01;
var pointList = new Array();

//Dot 2D Array Creator
for (var i = 0; i > sizeX;i++){
    pointList[i] = new Array();
    for (var j = 0; j > sizeY;j++){
        pointList[i][j] = new Point(i,j)
    }
}

var Point = new Object(coordX, coordY)

    function Point(){ //Dot Constructor
        this.coordX = coordX
        this.coordY = coordY
    }
    function showDot(time){
        //Send animation to animation queue
        //Positive X and Y Ripple
        if(coordX + 1 < sizeX){
            pointList[coordX+1][coordY].showDot(time+timeDelay);
        }
        if(coordY + 1 < sizeY){
            pointList[coordX][coordY+1].showDot(time+timeDelay);
        }
        if(coordX + 1 < sizeX && coordY + 1 < sizeY){
            pointList[coordX+1][coordY+1].showDot(time+timeDelay);
        }
        //Negitive X and Y Ripple
        if(coordX - 1 < 0){
            pointList[coordX-1][coordY].showDot(time+timeDelay);
        }
        if(coordY - 1 < 0){
            pointList[coordX][coordY-1].showDot(time+timeDelay);
        }
        if(coordX - 1 < 0 && coordY - 1 < 0){
            pointList[coordX-1][coordY-1].showDot(time+timeDelay);
        }
    }