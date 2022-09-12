function bgcolorchange(){
    var div = document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    div.style.backgroundColor = bgcolor;
}

function textcolchange(){
    var div = document.getElementById('box');
    var textcol = document.getElementById('textcolor').value;
    div.style.color = textcol;
}

function textsize(){
    var div = document.getElementById('box');
    var textsize = document.getElementById('fontsize').value;
    div.style.fontSize = textsize + 'px';
}

function widthchange(){
    var div = document.getElementById('box');
    var width = document.getElementById('boxwidth').value;
    div.style.width = width + 'px';
}

function heightchange(){
    var div = document.getElementById('box');
    var height = document.getElementById('boxheight').value;
    div.style.height = height + 'px';
}

function borderRadius(){
    var div = document.getElementById('box');
    var radius = document.getElementById('myslider').value;
    div.style.borderRadius = radius + 'px';
}
var car = null;
var timer = null;

function init(){
    car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = '5px';
}

function move(){
    if (parseInt(car.style.left) > 1150) {
        document.getElementById('danger').style.visibility = "visible";
        clearTimeout(timer);
    }
    else{
        car.style.left = parseInt(car.style.left) + 2 +'px';
        timer = setTimeout(move, 10);
    } 
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    document.getElementById('danger').style.visibility = "hidden";
    car.style.left = '5px';
}