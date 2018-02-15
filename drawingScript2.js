"use strict";

//Constants
var spacing = 50;
var offset = 10;


var draw;

SVG.on(document, 'DOMContentLoaded', function() {
    createGrid(11);
})

function createGrid(size){
    draw = SVG('canvas').id('gridCanvas').height(spacing*size+offset*2).width(spacing*size+offset*2)
    for(var x=0; x<=size; x++){
        var lineID = 'v'+x;
        draw.line(x*spacing+offset,0+offset,x*spacing+offset,size*spacing+offset).stroke({width: 1, color: '#A8A8A8'}).id(lineID);
    }
    for (var y=0; y<=size; y++){
        var lineID = 'h'+y;
        draw.line(0+offset,y*spacing+offset,size*spacing+offset, y*spacing+offset).stroke({width: 1, color: '#A8A8A8'}).id(lineID);
    }
    for(var x=0;x<=size;x++){
        for(var y=0;y<=size;y++){
            var idName = 'h'+x+'|v'+y;
            draw.circle(10).attr({cx:x*spacing+offset,cy:y*spacing+offset}).stroke({width:2,color:'#000000'}).id(idName).fill('#FFFFFF');
        }
    }
}
