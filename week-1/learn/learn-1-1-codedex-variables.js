// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Fabian Meza-Cera
// Date: 1/14/2026
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

const firstName = "Fabian"
const favColor = "Navy Blue"
let city = "Washington"
let mood = "Chill"
city = "Not Washington"

console.log(firstName)
console.log(favColor)
console.log(city)
console.log(mood)

// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------

let companyName = "Donut Media"
const foundingYear = 2015
const isActive = true
let fundingAmount;

console.log(companyName)
console.log(foundingYear)
console.log(isActive)
console.log(fundingAmount)

// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------

let fahrenheit = 33
let celsius = (fahrenheit - 32) / 1.8;

console.log(fahrenheit)
console.log(celsius)

// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------

const billAmount = 25.56
const tipPercent = 15
const tipAmount = billAmount * (tipPercent / 100)
const total = billAmount + tipAmount

console.log("==================================");
console.log("            McDonald's");
console.log("----------------------------------");
console.log("           Order Details");
console.log("----------------------------------");
console.log("Item         Quantity     Price");
console.log("Burger          1         $" + billAmount + "");
console.log("");
console.log("----------------------------------");
console.log("Subtotal                  $" + billAmount + "")
console.log("Tip (" + tipPercent + "%)" + "                 $" + tipAmount + "")
console.log("----------------------------------");
console.log("Total                     $" + total + "");
console.log("==================================");

// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

const songNumber = 50
const avgLength = 2.5
const totalDuration = songNumber * avgLength
const hours = Math.floor(totalDuration / 60)
const minutes = totalDuration % 60

console.log("=== Playlist Summary ===")
console.log("Number of songs: " + songNumber)
console.log("Average song length: " + avgLength + " minutes")
console.log("Total duration: " + totalDuration + " minutes")
console.log("Time: " + hours + " hours and " + minutes + " minutes")
