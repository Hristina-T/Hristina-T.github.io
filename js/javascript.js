
function naVrh() {
    window.scrollTo(0, 0);
}



var i = 0;
var images = [];
var time = 4000;

//lista slika za slajdove:
images[0] = 'img/slajd1.jpg';
images[1] = 'img/slajd2.jpg';
images[2] = 'img/slajd3.jpeg';

//promena slika:
function changeImg() {
    //slide je ime slike u html
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
        //da ide u krug
    }

    //za pokretanje fje nakon 4s
    setTimeout("changeImg()", time);
}

window.onload = changeImg();