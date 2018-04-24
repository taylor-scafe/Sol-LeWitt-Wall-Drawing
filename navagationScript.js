/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function openCanvas(){
    closeNav()
    document.getElementById('gridCanvas').remove()
    createGrid(12)
    document.getElementById('w7').classList.remove('active')
}
