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

function rippleAnimation(){
    //Get Point clicked
    var originX = 0;
    var originY = 0;
    for(row in pointList){
        for (point in row){
            point.showDot();
        }
    }
    //activate animation queue
    //clear animation queue
}

var Point = new Object(coordX, coordY)

    function Point(){ //Dot Constructor
        this.coordX = coordX
        this.coordY = coordY
    }
    function showDot(originX, originY){
        var animationTime = (Math.max(Math.abs(this.coordX-originX),Math.abs(this.coordY-originY)))
        //Queue animation at animation time
    }