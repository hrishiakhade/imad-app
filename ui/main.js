console.log('Loaded!');

var i=document.getElementById("Img");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    i.style.marginLeft=marginLeft + "px";
}
i.onclick=function(){
    var interval=setInterval(moveRight,50);
  
};