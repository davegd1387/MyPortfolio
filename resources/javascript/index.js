let element = document.getElementById("marley-title");
let imgElement = document.getElementById("marley-img");

element.onmouseover = function () {
  switchIt();
};
element.onmouseout = function () {
  switchIt();
};
imgElement.onmouseover = function () {
  switchIt();
};
imgElement.onmouseout = function () {
  switchIt();
};
console.log(imgElement.src);

function switchIt() {
  if (element.innerHTML == "(Not my actual photo)") {
    element.innerHTML = "(Actually, our doggy!)";
    imgElement.src = "./images/Marley.png ";
    element.style.color = "blue";
  } else {
    element.innerHTML = "(Not my actual photo)";
    imgElement.src = "./images/Snarley.jpg";
    element.style.color = "black";
  }
}
