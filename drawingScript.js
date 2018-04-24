//"use strict"
//Color Pallet
var colorRed = '#cc0000'
var colorBlue = '#3333ff'
var colorYellow = '#ffcc00'
var colorDarkGrey = '#848482'
var colorLightGrey = '#e5e4e2'
var colorWhite = "#ffffff"

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

var mainMenu

var loggedIn = false

var gridSize = 12

var storedPoint

var noDelay = false

SVG.on(document, 'DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementsByClassName('loader')[0].style.display = 'none'
        document.getElementsByTagName('html')[0].style['overflow'] = 'visible'
        createGrid(gridSize)
    }, 2500)
})

function createGrid(size) {
    draw = SVG('main').id('gridCanvas').height(spacing * size + offset * 2).width(spacing * size + offset * 2)
    gridLineSet = draw.set()
    allCircleSet = draw.set()
    primaryCircleSet = draw.set()
    secondaryCircleSet = draw.set()
    redLineSet = draw.set()
    blueLineSet = draw.set()
    yellowLineSet = draw.set()
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
                color: colorLightGrey
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
                color: colorLightGrey
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
                .addClass("svgCircle")
                .fill(colorWhite)
                .data({
                    active: false,
                    primary: true,
                    xLocation: x,
                    yLocation: y,
                    red: false,
                    blue: false,
                    yellow: false,
                })
                .scale(0.001, 0.001)
                .on('click', circleClick)
                .on('mouseover', circleMouseOn)
                .on('mouseout', circleMouseOff)
            allCircleSet.add(circle)


            //Look for Corners
            if ((x == 0 && y == 0) || (x == size && y == 0) || (x == 0 && y == size) || (x == size && y == size)) {
                circle.stroke({
                        width: 2,
                        color: colorBlue
                    })
                    .data({
                        'blue': true
                    })
                primaryCircleSet.add(circle)
                //Look for Cardnals
            } else if ((x == 0 && y == size / 2) || (x == size / 2 && y == 0) || (x == size / 2 & y == size) || (x == size && y == size / 2)) {
                circle.stroke({
                        width: 2,
                        color: colorRed
                    })
                    .data('red', true)
                primaryCircleSet.add(circle)
                //Look for Center
            } else if (x == size / 2 && y == size / 2) {
                circle.stroke({
                        width: 2,
                        color: colorYellow
                    })
                    .data('yellow', true)
                primaryCircleSet.add(circle)
                //Everything Else
            } else {
                circle.stroke({
                        width: 2,
                        color: colorDarkGrey
                    })
                    .data('primary', false)
                secondaryCircleSet.add(circle)
            }
        }
    }
    showPrimary(3000 + (gridSize * 2) * 20)
}

function radiateShowSecondary(x, y, color, delay) {
    secondaryCircleSet.each(function (i) {
        if (noDelay) {
            delay = 0
        }
        switch (color) {
            case colorRed:
                color = 'red'
                break;
            case colorBlue:
                color = 'blue'
                break;
            case colorYellow:
                color = 'yellow'
                break;
        }
        if (!this.data(color)) {
            this.animate(500, '<>', (Math.abs(this.data('xLocation') - x) + Math.abs(this.data('yLocation') - y)) * delay)
                .scale(1, 1)
                .fill(colorWhite)
            this.data('active', true)
        }
    })
}

function radiateHideSecondary(x, y, delay) {
    if (noDelay) {
        delay = 0
    }
    secondaryCircleSet.each(function (i) {
        this.animate(500, '<>', (Math.abs(this.data('xLocation') - x) + Math.abs(this.data('yLocation') - y)) * delay)
            .scale(0.001, 0.001)
            .fill(colorWhite)
        this.data('active', false)
    })
}

function showPrimary(delay) {
    primaryCircleSet.animate(500, '<>', delay).scale(1, 1)
    primaryCircleSet.data('active', true)
}

function hidePrimary() {
    primaryCircleSet.animate(500, '<>').scale(0.001, 0.001)
    primaryCircleSet.data('active', false)
}

var circleClick = function () {
    secondaryCircleSet.stop()
    if (this.data('active')) {
        if (this.data('primary')) {
            storedPoint = this
            hidePrimary()
            radiateShowSecondary(this.data('xLocation'), this.data('yLocation'), this.attr('stroke'), 500 / gridSize)
        } else {
            radiateHideSecondary(this.data('xLocation'), this.data('yLocation'), 1000 / gridSize)
            showPrimary()
            createLine(this)
        }
    }
}

var circleMouseOn = function () {
    if (this.data('active')) {
        this.animate(100, '<>', 0).scale(1.5, 1.5)
    }
}

var circleMouseOff = function () {
    if (this.data('active')) {
        this.animate(100, '<>', 0).scale(1, 1)
    }
}

function createLine(secondPoint, delay) {

    var line = draw.path()
        .m({
            x: storedPoint.attr('cx'),
            y: storedPoint.attr('cy')
        })
        .L({
            x: secondPoint.attr('cx'),
            y: secondPoint.attr('cy')
        })
        .stroke(storedPoint.attr('stroke'))
        .drawAnimated({
            delay: 100 * delay
        })
    primaryCircleSet.front()
    secondaryCircleSet.front()
    switch (storedPoint.attr('stroke')) {
        case colorRed:
            redLineSet.add(line)
            secondPoint.data('red', true)
            break;
        case colorBlue:
            blueLineSet.add(line)
            secondPoint.data('blue', true)
            break;
        case colorYellow:
            yellowLineSet.add(line)
            secondPoint.data('yellow', true)
            break;
    }
}

function toggleAnimation() {
    if (noDelay) {
        document.getElementById('animation').style.textDecoration = "none"
    } else {
        document.getElementById('animation').style.textDecoration = "line-through"
    }
    noDelay = !noDelay
}