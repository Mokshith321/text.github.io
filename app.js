
const box = document.getElementById("ColourBox");
const btn = document.getElementById("btn");
const gradient = document.getElementById("gradient");
btn.addEventListener("click", colour_change);
function colour_change() {
    let a = 255 * Math.random();
    let b = 255 * Math.random();
    let c = 255 * Math.random();
    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    let rgba = "rgb(" + a + "," + b + "," + c + ")";
    box.style.backgroundColor = rgba;
    let color = "0px 0px 300px ";
    color = color.concat(rgba);
    box.style.boxShadow = color;
}