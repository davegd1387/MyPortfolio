let pics = [
  "Marley.png",
  "Snarley.jpg",
  "m1.JPG",
  "m2.JPG",
  "m3.JPG",
  "m4.JPG",
  "m5.JPG",
  "m6.JPG",
  "m7.JPG",
];

let idx = 0;
const picsPath = "./images/";
const marleyImg = document.getElementById("marley-img");

setInterval(function () {
  marleyImg.src = picsPath + pics[idx];
  if (idx == pics.length - 1) {
    idx = 0;
  } else {
    idx += 1;
  }
}, 1000);
