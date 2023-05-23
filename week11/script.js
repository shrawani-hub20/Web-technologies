document.getElementById("parent").innerHTML=("Hello World");
document.getElementById("parent").style.cssText=("background-color:lavender; color:brown;");
document.getElementsByClassName("exercise")[0].innerHTML=("task");
document.getElementsByClassName("parent1")[0].style.cssText=("text-transform:Uppercase;");
document.getElementsByTagName("h3")[2].innerHTML=("Hi! I am Changed!");
document.querySelector("#heading").style.cssText=("background:seagreen; color:black;");
document.querySelector(".heading1").style.cssText=("background:blue; color:black;");

const change = document.querySelectorAll("h2");
for(i=0;i<change.length;i++){
    change[i].innerHTML=("I am different");
}