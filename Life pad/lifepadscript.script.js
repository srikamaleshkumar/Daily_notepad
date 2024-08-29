 var ppoverlay=document.querySelector(".ppoverlay")
 var ppbox=document.querySelector(".ppbox")
 var plus=document.getElementById("plusbutton")
 var cancel=document.getElementById("ppcancel");
 plus.addEventListener("click",function(){
    ppoverlay.style.display="block";
    ppbox.style.display="block";
}) 
cancel.addEventListener("click",function(event){
     event.preventDefault();
     ppoverlay.style.display="none";
     ppbox.style.display="none";
})
var book1=document.querySelector(".book-container");
var ppadd=document.getElementById("ppadd");
var addnotes=document.getElementById("addnotes");
var expect=document.getElementById("expect");
var shortdesc=document.getElementById("shortdesc");
ppadd.addEventListener("click",function(event){
     event.preventDefault();
     var div=document.createElement("div");
     div.setAttribute("class","book1");
     div.innerHTML=`<h1>${addnotes.value}</h1>
     <h3>${expect.value}</h3>
     <p>${shortdesc.value}</p>
     <button onclick="fent(event)">Delete</button>`;
     book1.append(div);     
     ppoverlay.style.display="none";
     ppbox.style.display="none";
})
function fent(event)
{
     event.target.parentElement.remove();
}