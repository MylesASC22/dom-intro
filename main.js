/**
 * methods to get a reference to an HTML element
 * 
 * getElementByID - returns a single element with the matching id
 * getElementsByClassName - returns a list o elements with the mathching class name  
 * 
 * querySelector - use CSS selectors  and returns the first match
 * querySelectorAll - use CSS selectors and return a list of matches
 */

let heading = document.getElementById("one");
console.log(heading);

console.dir(heading);

heading.style["background-color"] = "ff0000";

let allHeadings = document.getElementsByClassName("title");
console.log(allHeadings);

let colors = ["#00ff00", "#0000ff", "#00ffff", "#ff00ff"];
for (let i = 0; i < allHeadings.length; i++) {
let randomColor = Math.random();
randomColor = randomColor * colors.length; 

randomColor = Math.floor(randomColor);

    allHeadings[i].style["color"] = colors[randomColor];
}

let heading2 = document.querySelector("#one");
heading2.innerHTML = "Hi my name is Myles";

let allHeadings2 = document.querySelectorAll("h1");
for (let i = 0; i < allHeadings2.length; i++) {
    allHeadings2[i].style
}

// get a ref to the button with the id of background-button
let button = document.getElementById("background-button");

// set the onclick prop to an anynomous function 
button.onclick = function() {
    let divContainer = document.querySelector("#container");
    divContainer.style["background-color"] = "EEEE38";

}
