// Write your code below:
// const firstdiv = document.getElementById("header");
const divs = document.getElementsByTagName("div")
const firstdiv = divs[0];
const seconddiv = divs[1];
const element = document.createElement("h3");
element.id = "h3heading";
const elementText = document.createTextNode("Buy high quality organic fruits online");

element.appendChild(elementText);
firstdiv.appendChild(element);

const heading = document.getElementById("h3heading");
heading.style.fontStyle = "italic";

const fruits = document.querySelector(".fruits");
const para = document.createElement("p");
para.id = "fruits-total"
const paraText = document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
seconddiv.insertBefore(para, fruits);

// git hub commitid;