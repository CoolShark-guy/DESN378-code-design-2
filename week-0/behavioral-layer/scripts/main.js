//finds all the <li> elements in the HTML and stores them in the variable listItems.
const listItems = document.querySelectorAll("li");

//creates a function the "done" class on and off when a list item is clicked.
function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

//loops through each <li> element and waits for a click that runs the toggleDone function when clicked.
listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

//Searches HTML for <img> tags and stores it in the variable myImage
const myImage = document.querySelector("img");

// Waits for a click on the variable, when a click is recognized and the source image is the firefox-icon AND it's clicked on it changes to the image I uploaded.
// Otherwise if it's the image I uploaded, it changes back to firefox-icon.png
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Hands-1.png") {
    myImage.setAttribute("src", "images/Hands-2.png");
  } else {
    myImage.setAttribute("src", "images/Hands-1.png");
  }
});

// Searches my HTML for <button> element and stores it as myButton. 
let myButton = document.querySelector("button");
// Searches my HTML for the first h1 element and stores it as myHeading.
let myHeading = document.querySelector("h1");
// Doesn't search for all the <button> and <h1> elements because it's using querySelector and NOT querySelectorAll.

// declares a new function and creates a popup text box that stores the users name in the broswer permanently when typed in. Which then adds the name to the header.
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `I'm going to grab you, ${myName}`;
}

// Attempts to check if there is NO saved name in the local storage. If there is NO saved name the popup textbox appears.
// If there is already a name in the localstorage, it gets the name from the localstorage and displays the name.
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I'm going to grab you, ${storedName}`;
}

// waits for a click form the myButton variable, which then triggers to popup to add another name.
myButton.addEventListener("click", () => {
  setUserName();
});

// If the user clicks cancel or OK and nothing was entered, it is returned as null.
// If it is returned as null, it keeps popping up until there is a name typed in, then it is saved to local storage and pop up in the heading.
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `I'm going to grab you, ${myName}`;
  }
}

// This file does two things
// 1. Changes the image when clicked, and changes it back to the original image when clicked again.
// 2. Creates a welcome message in the header when a name is typed into the popup box, and remembers the user's name when refreshed.