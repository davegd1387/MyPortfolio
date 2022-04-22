let element = document.getElementById('marley-title');
let imgElement = document.getElementById('marley-img');


/*element.onmouseover = function() { mouseOver() };
element.onmouseout = function() { mouseOut() };
imgElement.onmouseover = function() { mouseOver() };
imgElement.onmouseout = function() { mouseOut() };*/
element.onmouseover = function() { switchIt() };
element.onmouseout = function() { switchIt() };
imgElement.onmouseover = function() { switchIt() };
imgElement.onmouseout = function() { switchIt() };
console.log(imgElement.src)

function switchIt() {
    if (element.style.color == "red") {
        element.style.color = "white";
    } else {
        element.style.color = "red";

    }
    // if (imgElement.src == "file:///home/dgd/Codecademy/MyPortfolio/images/Marley.png") {
    //if (imgElement.src == "./images/Marley.png") {
    if (element.innerHTML == "(Not my actual photo)") {
        element.innerHTML = "(Actually, our doggy!)"
            // imgElement.src = "/home/dgd/Codecademy/MyPortfolio/images/Snarley.jpg"
        imgElement.src = "./images/Snarley.jpg"
    } else {
        element.innerHTML = "(Not my actual photo)";
        imgElement.src = "./images/Marley.png "

    }
}

function mouseOver() {
    element.style.color = "red";
    element.innerHTML = "(Actually, our doggy!)"
        // imgElement.src = "/home/dgd/Codecademy/MyPortfolio/images/Snarley.jpg"
    imgElement.src = "./images/Snarley.jpg"
}


function mouseOut() {
    element.style.color = "white";
    element.innerHTML = "(Not my actual photo)";
    imgElement.src = "./images/Marley.png"
}