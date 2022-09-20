// Psuedo code
// 1. Define target elements - input, button, p.
// 2. collect the input(input.value)
// 3. calculate and convert
// 4. render it in p element(p.textContent)

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("button-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

let meterToFeet, feetToMeter;
let litreToGallon, GallonToLitre;
let KiloToPound, poundsToKilo;
let inputFromUser;

convertBtn.addEventListener("click", function() {
    inputFromUser = inputEl.value;
    // Length
    meterToFeet = (inputFromUser * 3.281).toFixed(3);
    feetToMeter = (inputFromUser / 3.281).toFixed(3);
    lengthEl.textContent = `${inputFromUser} meters = ${meterToFeet} feet | ${inputFromUser} feet = ${feetToMeter} meters`;

    // Volume
    litreToGallon = (inputFromUser * 0.264).toFixed(3);
    GallonToLitre = (inputFromUser / 0.264).toFixed(3);
    volumeEl.textContent = `${inputFromUser} litres = ${litreToGallon} gallons | ${inputFromUser} gallons = ${GallonToLitre} litres`;

    // Mass
    KiloToPound = (inputFromUser * 2.204).toFixed(3);
    poundsToKilo = (inputFromUser / 2.204).toFixed(3);
    massEl.textContent = `${inputFromUser} kilos = ${KiloToPound} pounds | ${inputFromUser} pounds = ${poundsToKilo} kilos`;
})
