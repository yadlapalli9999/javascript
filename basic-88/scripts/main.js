
function headerList() {
    var listHeader = [{ "name": "Home" }, { "name": "Contact" }, { "name": "Blog" }, { "name": "Carees" }, { "name": "About us" }]
    for (i = 0; i < listHeader.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = listHeader[i].name;
        document.getElementById('list').appendChild(li)
    }
}

var listImages = [{ "image": "../images/demo/images-1.jpeg" }, { "image": "../images/demo/image-2.jpg" }, { "image": "../images/demo/image-3.jpg" }, { "image": "../images/demo/image-4.jpg" }, { "image": "../images/demo/image-5.jpg" }, { "image": "../images/demo/image-6.jpg" }]
var index = 0;
function sliderListImage(index) {
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', listImages[index].image);
    imgElem.setAttribute('width', "960px");
    imgElem.setAttribute('height', "360px");
    document.getElementById('slider').innerHTML = '';
    document.getElementById('slider').append(imgElem);
    // var imgElem = '<img src="'+ listImages[index].image+'" height="360px" width="960px"/>';
    // document.getElementById('slider').innerHTML = imgElem;

}
setInterval(function () {
    
    if (index >= listImages.length) {
        index = 0;
        sliderListImage(index);
    } else {
        sliderListImage(index);
        index += 1;
    }

}, 2000)
headerList()

function serverItem() {
    var serviceList = [{ "image": "../images/demo/images-1.jpeg", "header": "Nature Image", "desciption": "content of data","href":"Read More" }, { "image": "../images/demo/image-2.jpg", "header": "Nature Image", "desciption": "content of data" ,"href":"Read More"}, { "image": "../images/demo/image-3.jpg", "header": "Nature Image", "desciption": "content of data" ,"href":"Read More"}]
    for (j = 0; j < serviceList.length; j++) {
        var div = document.createElement('div');
        div.setAttribute('class', "one_third");
       


        var imgElem1 = document.createElement('img');
        imgElem1.setAttribute('src', serviceList[j].image);
        imgElem1.setAttribute('width', "290px");
        imgElem1.setAttribute('height', "180px");

        var h2 = document.createElement('h2');
        h2.innerHTML = serviceList[j].header

        var p = document.createElement('p');
        p.innerHTML = serviceList[j].desciption
        var a = document.createElement('a')
        a.setAttribute('href',serviceList[j].href)
        a.innerHTML = 'Read More'

        div.appendChild(imgElem1)
        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(a)
        console.log(div)
        document.getElementById('services').appendChild(div)
    }
}

function introduction(){
    var serviceList1 = [{ "image": "../images/demo/images-1.jpeg", "header": "Indonectetus facilis leo nibh", "desciption": 'This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>. For full terms of use of this template please read our <a href="https://www.os-templates.com/template-terms">website template licence</a>.' }]
    for (k = 0; k < serviceList1.length; k++) {
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        //div.setAttribute('class', "one_third");
         div2.setAttribute('style',"float:left,width:460px")
        // div2.setAttribute('float',"left")
        // div2.setAttribute('width', "460px")

        var imgElem2 = document.createElement('img');
        imgElem2.setAttribute('src', serviceList1[k].image);
        imgElem2.setAttribute('width', "450px");
        imgElem2.setAttribute('height', "250px");
        imgElem2.setAttribute( 'style','float:right')

        var h2 = document.createElement('h2');
        h2.innerHTML = serviceList1[k].header

        var p = document.createElement('p');
        p.innerHTML = serviceList1[k].desciption

        div1.appendChild(imgElem2)
        div2.appendChild(h2)
        div2.appendChild(p)
        div3.appendChild(div1)
        div3.appendChild(div2)
        console.log(div1)
        document.getElementById('intro').appendChild(div3)
    }
}

serverItem()

introduction()

