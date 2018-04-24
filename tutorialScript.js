var gridSizeTutorial = 16
var lineNumberTutorial = 30

function startTutorial() {
    closeNav()
    document.getElementsByClassName('loader')[0].style.display = 'block'
    document.getElementById('gridCanvas').remove()
    //var audio = new Audio('tutorial1.mp3');
    //audio.play();
    setTimeout(function () {
        //audio = new Audio('tutorial2.mp3');
        //audio.play();
        document.getElementsByClassName('loader')[0].style.display = 'none'
        createGrid(gridSizeTutorial)
        hidePrimary()
        document.getElementById('w1').classList.add('active')
        setTimeout(function () {
            //audio = new Audio('tutorial3.mp3');
            //audio.play();
            var counter = 0
            while (counter < lineNumberTutorial) {
                var random = Math.floor((Math.random() * primaryCircleSet.length()))
                if (primaryCircleSet.get(random).data('red')) {
                    storedPoint = primaryCircleSet.get(random)
                    random = Math.floor((Math.random() * secondaryCircleSet.length()))
                    if (secondaryCircleSet.get(random).data('red')) {
                        //do nothing
                    } else {
                        createLine(secondaryCircleSet.get(random), counter)
                        counter += 1
                    }
                }
            }
            setTimeout(function () {
                document.getElementById('gridCanvas').remove()
                createGrid(gridSizeTutorial)
                hidePrimary()
                document.getElementById('w2').classList.add('active')
                document.getElementById('w1').classList.remove('active')
                setTimeout(function () {
                    //audio = new Audio('tutorial3.mp3');
                    //audio.play();
                    var counter = 0
                    while (counter < lineNumberTutorial) {
                        var random = Math.floor((Math.random() * primaryCircleSet.length()))
                        if (primaryCircleSet.get(random).data('blue')) {
                            storedPoint = primaryCircleSet.get(random)
                            random = Math.floor((Math.random() * secondaryCircleSet.length()))
                            if (secondaryCircleSet.get(random).data('blue')) {
                                //do nothing
                            } else {
                                createLine(secondaryCircleSet.get(random), counter)
                                counter += 1
                            }
                        }
                    }
                    setTimeout(function () {
                        document.getElementById('gridCanvas').remove()
                        createGrid(gridSizeTutorial)
                        hidePrimary()
                        document.getElementById('w3').classList.add('active')
                        document.getElementById('w2').classList.remove('active')
                        setTimeout(function () {
                            //audio = new Audio('tutorial3.mp3');
                            //audio.play();
                            var counter = 0
                            while (counter < lineNumberTutorial) {
                                var random = Math.floor((Math.random() * primaryCircleSet.length()))
                                if (primaryCircleSet.get(random).data('yellow')) {
                                    storedPoint = primaryCircleSet.get(random)
                                    random = Math.floor((Math.random() * secondaryCircleSet.length()))
                                    if (secondaryCircleSet.get(random).data('yellow')) {
                                        //do nothing
                                    } else {
                                        createLine(secondaryCircleSet.get(random), counter)
                                        counter += 1
                                    }
                                }
                            }
                            setTimeout(function () {
                                document.getElementById('gridCanvas').remove()
                                createGrid(gridSizeTutorial)
                                hidePrimary()
                                document.getElementById('w4').classList.add('active')
                                document.getElementById('w3').classList.remove('active')
                                setTimeout(function () {
                                    //audio = new Audio('tutorial3.mp3');
                                    //audio.play();
                                    var counter = 0
                                    while (counter < lineNumberTutorial) {
                                        var random = Math.floor((Math.random() * primaryCircleSet.length()))
                                        if (primaryCircleSet.get(random).data('red') || primaryCircleSet.get(random).data('blue')) {
                                            storedPoint = primaryCircleSet.get(random)
                                            random = Math.floor((Math.random() * secondaryCircleSet.length()))
                                            if (secondaryCircleSet.get(random).data('red') || secondaryCircleSet.get(random).data('blue')) {
                                                //do nothing
                                            } else {
                                                createLine(secondaryCircleSet.get(random), counter)
                                                counter += 1
                                            }
                                        }
                                    }
                                    setTimeout(function () {
                                        document.getElementById('gridCanvas').remove()
                                        createGrid(gridSizeTutorial)
                                        hidePrimary()
                                        document.getElementById('w5').classList.add('active')
                                        document.getElementById('w4').classList.remove('active')
                                        setTimeout(function () {
                                            //audio = new Audio('tutorial3.mp3');
                                            //audio.play();
                                            var counter = 0
                                            while (counter < lineNumberTutorial) {
                                                var random = Math.floor((Math.random() * primaryCircleSet.length()))
                                                if (primaryCircleSet.get(random).data('red') || primaryCircleSet.get(random).data('yellow')) {
                                                    storedPoint = primaryCircleSet.get(random)
                                                    random = Math.floor((Math.random() * secondaryCircleSet.length()))
                                                    if (secondaryCircleSet.get(random).data('red') || secondaryCircleSet.get(random).data('yellow')) {
                                                        //do nothing
                                                    } else {
                                                        createLine(secondaryCircleSet.get(random), counter)
                                                        counter += 1
                                                    }
                                                }
                                            }
                                            setTimeout(function () {
                                                document.getElementById('gridCanvas').remove()
                                                createGrid(gridSizeTutorial)
                                                hidePrimary()
                                                document.getElementById('w6').classList.add('active')
                                                document.getElementById('w5').classList.remove('active')
                                                setTimeout(function () {
                                                    //audio = new Audio('tutorial3.mp3');
                                                    //audio.play();
                                                    var counter = 0
                                                    while (counter < lineNumberTutorial) {
                                                        var random = Math.floor((Math.random() * primaryCircleSet.length()))
                                                        if (primaryCircleSet.get(random).data('blue') || primaryCircleSet.get(random).data('yellow')) {
                                                            storedPoint = primaryCircleSet.get(random)
                                                            random = Math.floor((Math.random() * secondaryCircleSet.length()))
                                                            if (secondaryCircleSet.get(random).data('blue') || secondaryCircleSet.get(random).data('yellow')) {
                                                                //do nothing
                                                            } else {
                                                                createLine(secondaryCircleSet.get(random), counter)
                                                                counter += 1
                                                            }
                                                        }
                                                    }
                                                    setTimeout(function () {
                                                        document.getElementById('gridCanvas').remove()
                                                        createGrid(gridSizeTutorial)
                                                        hidePrimary()
                                                        document.getElementById('w7').classList.add('active')
                                                        document.getElementById('w6').classList.remove('active')
                                                        setTimeout(function () {
                                                            //audio = new Audio('tutorial3.mp3');
                                                            //audio.play();
                                                            var counter = 0
                                                            while (counter < lineNumberTutorial) {
                                                                var random = Math.floor((Math.random() * primaryCircleSet.length()))
                                                                storedPoint = primaryCircleSet.get(random)
                                                                random = Math.floor((Math.random() * secondaryCircleSet.length()))
                                                                if ((secondaryCircleSet.get(random).data('red') || secondaryCircleSet.get(random).data('blue')) || secondaryCircleSet.get(random).data('yellow')) {
                                                                    //do nothing
                                                                } else {
                                                                    createLine(secondaryCircleSet.get(random), counter)
                                                                    counter += 1
                                                                }
                                                            }

                                                        }, 4500)
                                                    }, 5200)
                                                }, 4500)
                                            }, 5200)
                                        }, 4500)
                                    }, 5200)
                                }, 4500)
                            }, 5200)
                        }, 4500)
                    }, 5200)
                }, 4500)
            }, 5200)
        }, 4500)
    }, 1000)
}