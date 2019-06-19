function dataList(){
    document.getElementById('demo').innerHTML = ""
    for(k=0;k<data.length;k++){
        console.log(data[k])
        var mainDiv = document.createElement('div')

        mainDiv.innerHTML = '<div class="card" style="width: 18rem;text-align:center"><img style="width:200px;height:200px;" src="'+data[k].image+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data[k].name+'</h5><p class="card-text">'+data[k].cost+'</p><a type="button" class="btn btn-primary" onclick="addCart('+k+')">addCart</a></div></div>'
        mainDiv.setAttribute('style',"float:left;margin-left:20px;margin-top:10px;")

        document.getElementById('demo').appendChild(mainDiv)
    }
}
dataList()

function All(){
    document.getElementById('demo').innerHTML = ""
    for(k=0;k<data.length;k++){
       
         var mainDiv = document.createElement('div')
 
         mainDiv.innerHTML = '<div class="card" style="width: 18rem;text-align:center"><img style="width:200px;height:200px;" src="'+data[k].image+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data[k].name+'</h5><p class="card-text">'+data[k].cost+'</p><a type="button" class="btn btn-primary" onclick="addCart('+k+')">addCart</a></div></div>'
         mainDiv.setAttribute('style',"float:left;margin-left:20px;margin-top:10px;")
 
         document.getElementById('demo').appendChild(mainDiv)
        document.getElementById('all-item').innerHTML = data.length
        }
     
}
All()

function Sports(){
    document.getElementById('demo').innerHTML = ""
    var list = [];
    for(k=0;k<data.length;k++){
       if(data[k].type == "ball"){
        list.push(data[k]);
        // console.log(list)
        document.getElementById('sports-item').innerHTML = list.length;
        var mainDiv = document.createElement('div')

        mainDiv.innerHTML = '<div class="card" style="width: 18rem;text-align:center"><img style="width:200px;height:200px;" src="'+data[k].image+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data[k].name+'</h5><p class="card-text">'+data[k].cost+'</p><a type="button" class="btn btn-primary" onclick="addCart('+k+')">addCart</a></div></div>'
        mainDiv.setAttribute('style',"float:left;margin-left:20px;margin-top:10px;")

        document.getElementById('demo').appendChild(mainDiv)
       
           
       }
    //    document.getElementById('sports-item').innerHTML = data[k].type.length
    }
    
}

Sports()
function Books(){
    document.getElementById('demo').innerHTML = ""
    var list = [];
    for(k=0;k<data.length;k++){
       if(data[k].type == "book"){
           list.push(data[k])
           document.getElementById('book-item').innerHTML = list.length;
        var mainDiv = document.createElement('div')

        mainDiv.innerHTML = '<div class="card" style="width: 18rem;text-align:center"><img style="width:200px;height:200px;" src="'+data[k].image+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data[k].name+'</h5><p class="card-text">'+data[k].cost+'</p><a type="button" class="btn btn-primary" onclick="addCart('+k+')">addCart</a></div></div>'
        mainDiv.setAttribute('style',"float:left;margin-left:20px;margin-top:10px;")

        document.getElementById('demo').appendChild(mainDiv)
           //document.getElementById('sports-item').innerHTML = data[k].length
       }
    }
}
Books()
function Shirts(){
    document.getElementById('demo').innerHTML = ""
    var list = [];
    for(k=0;k<data.length;k++){
       if(data[k].type == "shirt"){
           list.push(data[k])
           document.getElementById('shirt-item').innerHTML = list.length
        var mainDiv = document.createElement('div')

        mainDiv.innerHTML = '<div class="card" style="width: 18rem;text-align:center"><img style="width:200px;height:200px;" src="'+data[k].image+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data[k].name+'</h5><p class="card-text">'+data[k].cost+'</p><a type="button" class="btn btn-primary" onclick="addCart('+k+')">addCart</a></div></div>'
        mainDiv.setAttribute('style',"float:left;margin-left:20px;margin-top:10px;")

        document.getElementById('demo').appendChild(mainDiv)
           //document.getElementById('sports-item').innerHTML = data[k].length
       }
    }
}
Shirts()

function addCart(i){


}
addCart()


