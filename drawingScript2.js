"use strict"
//Color Pallet
//Red: #CC0000
//Blue: #3333FF
//Yellow: #FFCC00
//Dark Grey: #848482
//Light Grey: #E5E4E2

//Constants
var spacing = 50;
var offset = 10;

var draw;

SVG.on(document, 'DOMContentLoaded', function () {
    createGrid(12)

    /*draw.path("M70.43,245.415c-13.035-4.904-21.103-19.31-21.422-30.478c-2.149-17.412,4.73-36.142,19.379-52.761\
    c17.562-19.923,42.67-32.796,63.966-32.796c1.343,0,2.682,0.053,3.982,0.155c10.627,0.845,18.868,5.149,24.396,12.527\
    c-2.97-11.038-8.341-14.332-11.783-16.444l-8.095-4.982l9.107-0.754c0.197-0.017,0.406-0.025,0.628-0.025\
    c2.952,0,7.921,1.673,13.221,4.336c-2.156-5.497-6.761-12.191-16.399-12.191c-0.139,0-0.227,0.003-0.256,0.004\
    c-7.789,0.399-13.383,2.516-16.189,6.123c-1.879,2.415-2.177,5.137-1.829,6.878l0.789,3.95l-4.01-0.375\
    c-7.049-0.659-12.814-1.935-16.969-11.274c-2.106-0.893-5.942-2.994-7.737-6.99c-0.958-2.134-1.652-5.643,0.48-10.243\
    c1.165-2.515,3.21-4.469,5.745-5.985c-13.398,4.66-19.58,17.016-19.58,21.357c0,9.36,5.621,11.426,5.86,11.509l3.521,1.227\
    l-1.903,3.193c-0.311,0.506-7.729,12.393-17.902,12.393c-3.067,0-6.013-1.065-8.756-3.166c-4.421-3.386-6.812-8.269-6.916-14.121\
    c-0.038-2.131,0.231-4.35,0.783-6.612c-4.893,11.158-6.947,24.465-5.418,34.226l2.941,18.778l-8.582-16.959\
    c-10.299-20.354-11.653-37.397-4.025-50.657c0.668-1.161,1.395-2.276,2.177-3.348l-4.45-3.407\
    c17.015-27.046,39.015-32.724,54.475-32.724c28.717,0,53.634,18.137,66.246,33.667c11.505,14.169,15.314,33.688,11.015,56.444\
    c-3.201,16.945-9.664,29.593-9.937,30.122l-7.727,14.975l2.083-16.721c0.16-1.286,0.305-2.541,0.438-3.771\
    c-0.493-3.407-1.958-12.717-4.077-19.058l-4.985,2.926c-1.975,1.159-4.186,2.371-6.6,3.037l1.346,0.142l-3.936,4.374\
    c-0.431,0.479-0.87,0.986-1.322,1.511c-3.829,4.437-9.075,10.512-19.157,10.512c-1.528,0-3.14-0.145-4.79-0.43\
    c-4.945-0.855-8.504-3.652-10.292-8.087c-1.195-2.961-1.512-6.52-1.024-10.392c-3.937,9.277-4.727,18.626-4.075,21.232\
    c0.391,1.562,2.184,2.354,5.331,2.354c2.788,0,6.376-0.695,10.104-1.958l5.6-1.896l-1.776,5.64\
    c-4.35,13.811-16.206,22.36-24.696,22.36c-0.262,0-0.521-0.009-0.775-0.025c-4.165,3.331-8.186,5.019-11.966,5.019\
    c-2.044,0-3.941-0.507-5.617-1.46c0.879,2.86,2.567,4.697,4.623,6.631l9.369,8.817l-12.303-3.764\
    c-5.703-1.745-9.735-5.851-11.984-12.205c-2.366-6.68-2.456-15.241-1.318-23.677c-1.274,6.104-1.581,12.084-1.446,17.258\
    c0.43,16.514,5.43,29.334,7.379,30.934l14.055,11.529L70.43,245.415z M131.446,148.924c-3.583,3.861-5.637,8.682-5.975,13.08\
    c-0.114,1.493,0.338,2.171,0.688,2.55c1.952,2.119,7.692,2.226,11.366,2.248c-1.418-0.669-2.768-1.636-4.039-2.899\
    c-2.373-2.356-3.539-5.506-3.371-9.108C130.205,152.882,130.662,150.902,131.446,148.924z M150.143,154.244\
    c0.001,0-0.065,0.062-0.149,0.258c-0.847,1.977-0.638,2.732-0.554,2.917c0.127,0.279,0.643,0.846,2.676,1.5l5.304,1.707\
    c-0.115-0.321-0.232-0.634-0.352-0.935c-1.071-2.718-4.791-5.478-6.683-5.478C150.216,154.214,150.148,154.241,150.143,154.244z")
    .stroke({color: 'black', width: 1})
    .drawAnimated()
    .fill('white')
    */
})

function createGrid(size) {
    draw = SVG('canvas').id('gridCanvas').height(spacing * size + offset * 2).width(spacing * size + offset * 2)
    //Create Vertical Lines
    for (var x = 0; x <= size; x++) {
        var lineID = 'v' + x;
        draw.path().m({
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

    }
    //Create Horizontal Lines
    for (var y = 0; y <= size; y++) {
        var lineID = 'h' + y;
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
                .attr({
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
            //Look for Corners
            if ((x == 0 && y == 0) || (x == size && y == 0) || (x == 0 && y == size) || (x == size && y == size)) {
                circle.stroke({
                        width: 2,
                        color: '#3333FF'
                    })
                    .attr('blue', true)
                    .click(function () {
                        this.animate(200).attr({
                            fill: '#3333FF'
                        })
                    })
                //Look for Cardnals
            } else if ((x == 0 && y == size / 2) || (x == size / 2 && y == 0) || (x == size / 2 & y == size) || (x == size && y == size / 2)) {
                circle.stroke({
                        width: 2,
                        color: '#CC0000'
                    })
                    .attr('red', true)
                    .click(function () {
                        this.animate(200).attr({
                            fill: '#CC0000'
                        })
                    })
                //Look for Center
            } else if (x == size / 2 && y == size / 2) {
                circle.stroke({
                        width: 2,
                        color: '#FFCC00'

                    })
                    .attr('yellow', true)
                    .click(function () {
                        this.animate(200).attr({
                            fill: '#FFCC00'
                        })
                    })
                //Everything Else
            } else {
                circle.stroke({
                        width: 2,
                        color: '#848482'
                    })
                    .click(function () {
                        this.animate(200).attr({
                            fill: '#848482'
                        })
                    })
            }
            circle.animate(500, '<>', 3000 + (x + y) * 20).scale(1, 1)
        }
    }
}

function radiateHide(x, y, color) {
    for (var circle in circleGroup) {
        if (!circleList[circle].attr(color)) {
            circleList[circle].animate(500, '<>', (Math.abs(circleList[circle].xLocation - x) + Math.abs(circleList[circle].yLocation - y)) * 600).scale(0.001, 0.001).fill('white')
        }
    }
    //for(var circle in circleList){
    //    circleList[circle].animate(500,'<>',(Math.abs(circleList[circle].xLocation-x)+Math.abs(circleList[circle].yLocation-y))*60+6000).scale(1,1)
    //}
}
