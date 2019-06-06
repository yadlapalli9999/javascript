function headerList() {
    var listHeader = [{ "name": "Home" }, { "name": "Contact" }, { "name": "Blog" }, { "name": "Carees" }, { "name": "About us" }]
    for (i = 0; i < listHeader.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = listHeader[i].name;
        li.setAttribute('id',"headeLI")
        document.getElementById('list').appendChild(li)
    }
}
headerList()
//slider images
var image = document.getElementById("circle");
var currentPos = 0;
var images = ["../images/demo/images-1.jpeg", "../images/demo/image-2.jpg", "../images/demo/image-3.jpg", "../images/demo/image-4.jpg", "../images/demo/image-5.jpg", "../images/demo/image-6.jpg"]

function change() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}
setInterval(change, 2000);

//lastest assets with slider
var lastestImages = [[{ "image": "../images/demo/images-1.jpeg" }, { "image": "../images/demo/image-2.jpg" }, { "image": "../images/demo/image-3.jpg" }], [{ "image": "../images/demo/image-4.jpg" }, { "image": "../images/demo/image-5.jpg" }, { "image": "../images/demo/image-6.jpg" }], [{ "image": "../images/demo/images-1.jpeg" }, { "image": "../images/demo/image-2.jpg" }, { "image": "../images/demo/image-3.jpg" }]]

var lastestImages = ["../images/demo/images-1.jpeg", "../images/demo/image-2.jpg", "../images/demo/image-3.jpg", "../images/demo/image-4.jpg", "../images/demo/image-5.jpg", "../images/demo/image-6.jpg"]
var image1 = document.getElementById("circle1");
image1.setAttribute('width', "290px");
image1.setAttribute('height', "180px")
var currentPos1 = 0;
function firstImage() {
    if (++currentPos1 >= lastestImages.length)
        currentPos1 = 0;

    image1.src = lastestImages[currentPos1];

}
var image2 = document.getElementById("circle2");
image2.setAttribute('width', "290px");
image2.setAttribute('height', "180px")
var currentPos1 = 0;
function secondImage() {
    if (++currentPos1 >= lastestImages.length)
        currentPos1 = 0;

    image2.src = lastestImages[currentPos1];

}
var image3 = document.getElementById("circle3");
image3.setAttribute('width', "290px");
image3.setAttribute('height', "180px")
var currentPos1 = 0;
function thirdImage() {
    if (++currentPos1 >= lastestImages.length)
        currentPos1 = 0;

    image3.src = lastestImages[currentPos1];

}
// setInterval(firstImage,2000)
// setInterval(secondImage, 2000)
// setInterval(thirdImage, 2000)
function startsliding1() {
    imgint1 = setInterval(firstImage, 2000);
}
function startsliding2() {
    imgint2 = setInterval(secondImage, 2000)
}
function startsliding3() {
    imgint3 = setInterval(thirdImage, 2000)
}
//startsliding()

document.getElementById('circle1').onmouseover = function () {
    startsliding1()
    //clearInterval(imgint)
}
document.getElementById('circle1').onmouseout = function () {
    clearInterval(imgint1)
}
document.getElementById('circle2').onmouseover = function () {
    startsliding2()
    //clearInterval(imgint)
}
document.getElementById('circle2').onmouseout = function () {
    clearInterval(imgint2)
}
document.getElementById('circle3').onmouseover = function () {
    startsliding3()
    //clearInterval(imgint)
}
document.getElementById('circle3').onmouseout = function () {
    clearInterval(imgint3)
}

function firstColor(){
    document.getElementById('row1').style.backgroundColor = "green";
    document.getElementById('row3').style.backgroundColor = "green"
    
}

function secondColor(){
    document.getElementById('row1').style.backgroundColor = "pink";
    document.getElementById('row3').style.backgroundColor = "pink"
    document.getElementsByTagName('a').style.backgroundColor = " "
}