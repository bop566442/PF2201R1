function moveUp() {
    let a = document.getElementById('tank').style.top;
    let a1 = parseInt(a);
    let b = document.getElementById('tank').style.left;
    let b1 = parseInt(b);
    a1 -= 19;
    document.getElementById('tank').style.top = a1 + "px"

}
function moveDown() {
    let a = document.getElementById('tank').style.top;
    let a1 = parseInt(a);
    let b = document.getElementById('tank').style.left;
    let b1 = parseInt(b);
    a1 += 19;
    document.getElementById('tank').style.top = a1 + "px"
}
function moveRight() {
    let a = document.getElementById('tank').style.top;
    let a1 = parseInt(a);
    let b = document.getElementById('tank').style.left;
    let b1 = parseInt(b);
    b1 += 19;
    document.getElementById('tank').style.left = b1 + "px"
}
function moveLeft() {
    let a = document.getElementById('tank').style.top;
    let a1 = parseInt(a);
    let b = document.getElementById('tank').style.left;
    let b1 = parseInt(b);
    b1 -= 19;
    document.getElementById('tank').style.left = b1 + "px"
}