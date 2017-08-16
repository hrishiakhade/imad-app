//Counter
var counter=0;
var button=document.getElementById("counter");
button.onclick=function(){
    
    
    
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("Submit");
submit.onclick=function(){
    
}