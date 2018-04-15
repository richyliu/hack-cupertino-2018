var penColor = 'white';

function setPixelColor(pixel) {
  pixel.style.backgroundColor = penColor;
}

function setPenColor(color) {
  penColor = color;
}

function reloadPage() {
    window.location.reload();
}

function getRandomImg() {
    var a = Math.floor(Math.random() * 3);

    if (a == 0) { return ("java_num.png"); }
    else if (a == 1) { return ("bee_num.png"); }
    else { return ("fire_num.png"); }
}

function generateTag() {
    var img = document.createElement('img');
    img.setAttribute('src', getRandomImg());
    document.getElementById('img-container').appendChild(img);
}

generateTag();
