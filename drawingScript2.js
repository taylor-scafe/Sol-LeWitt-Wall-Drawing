"use strict"
//Color Pallet
//Red: #CC0000
//Blue: #3333FF
//Yellow: #FFCC00
//Dark Grey: #848482
//Light Grey: #E5E4E2

//Constants
var spacing = 50
var offset = 10

var draw

var gridLineSet

var redLineSet
var blueLineSet
var yellowLineSet

var allCircleSet
var primaryCircleSet
var secondaryCircleSet

SVG.on(document, 'DOMContentLoaded', function () {
    createGrid(12)
})

function createGrid(size) {
    draw = SVG('canvas').id('gridCanvas').height(spacing * size + offset * 2).width(spacing * size + offset * 2)
    gridLineSet = draw.set()
    allCircleSet = draw.set()
    primaryCircleSet = draw.set()
    secondaryCircleSet = draw.set()
    //Create Vertical Lines
    for (var x = 0; x <= size; x++) {
        var lineID = 'v' + x;
        gridLineSet.add(
            draw.path()
            .m({
                x: x * spacing + offset,
                y: 0 + offset
            }).V(size * spacing + offset)
            .stroke({
                width: 1,
                color: '#E5E4E2'
            })
            .id(lineID)
            .drawAnimated({
                delay: x * 100 + 1000
            })
        )
    }
    //Create Horizontal Lines
    for (var y = 0; y <= size; y++) {
        var lineID = 'h' + y;
        gridLineSet.add(
            draw.path()
            .m({
                x: 0 + offset,
                y: y * spacing + offset
            }).H(size * spacing + offset)
            .stroke({
                width: 1,
                color: '#E5E4E2'
            })
            .id(lineID)
            .drawAnimated({
                delay: y * 100
            })
        )
    }
    //Create Circles
    for (var x = 0; x <= size; x++) {
        for (var y = 0; y <= size; y++) {
            var idName = 'h' + x + '|v' + y;
            var circle = draw.circle(10)
                .attr({
                    cx: x * spacing + offset,
                    cy: y * spacing + offset
                })
                .id(idName)
                .fill('#FFFFFF')
                .data({
                    xLocation: x,
                    yLocation: y,
                    red: false,
                    blue: false,
                    yellow: false,
                })
                .scale(0.001, 0.001)
                .mouseover(function () {
                    this.animate(200).scale(1.5, 1.5)
                })
                .mouseout(function () {
                    this.animate(200).scale(1, 1)
                })
            allCircleSet.add(circle)
            //Look for Corners
            if ((x == 0 && y == 0) || (x == size && y == 0) || (x == 0 && y == size) || (x == size && y == size)) {
                circle.stroke({
                        width: 2,
                        color: '#3333FF'
                    })
                    .data('blue', true)
                    .click(function () {
                        this.animate(200).fill('#3333FF')
                    })
                primaryCircleSet.add(circle)
                //Look for Cardnals
            } else if ((x == 0 && y == size / 2) || (x == size / 2 && y == 0) || (x == size / 2 & y == size) || (x == size && y == size / 2)) {
                circle.stroke({
                        width: 2,
                        color: '#CC0000'
                    })
                    .data('red', true)
                    .click(function () {
                        this.animate(200).fill('#CC0000')
                    })
                primaryCircleSet.add(circle)
                //Look for Center
            } else if (x == size / 2 && y == size / 2) {
                circle.stroke({
                        width: 2,
                        color: '#FFCC00'

                    })
                    .data('yellow', true)
                    .click(function () {
                        this.animate(200).fill('#FFCC00')
                    })
                primaryCircleSet.add(circle)
                //Everything Else
            } else {
                circle.stroke({
                        width: 2,
                        color: '#848482'
                    })
                    .click(function () {
                        this.animate(200).fill('#848482')
                    })
                secondaryCircleSet.add(circle)
            }
            circle.animate(500, '<>', 3000 + (x + y) * 20).scale(1, 1)
        }
    }
}

function radiateHideSecondary(x, y, color) {
    secondaryCircleSet.each(function(i){
        if (!this.data(color)){
            this.animate(500, '<>', (Math.abs(this.data('xLocation') - x) + Math.abs(this.data('yLocation') - y)) * 50)
            .scale(0.001, 0.001)
            .fill('white')
        }
    })
}