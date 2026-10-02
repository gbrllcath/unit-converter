/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")

let metersFeet = document.getElementById("meters-feet")
let feetMeters = document.getElementById("feet-meters")

let litersGallons = document.getElementById("liters-gallons")
let gallonsLiters = document.getElementById("gallons-liters")

let kilogramsPounds = document.getElementById("kilograms-pounds")
let poundsKilograms = document.getElementById("pounds-kilograms")



convertBtn.addEventListener("click", function() {
    let inputValue = Number(inputField.value)
    
    if (inputField.value === "") {
        return
    } else {

    let metersToFeet = inputValue * 3.281
    metersFeet.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet`
    let feetToMeters = inputValue * (1 / 3.281)
    feetMeters.textContent = `${inputValue} feet = ${feetToMeters.toFixed(3)} meters`

    let litersToGallons = inputValue * 0.264
    litersGallons.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons`
    let gallonsToLiters = inputValue * (1 / 0.264)
    gallonsLiters.textContent = `${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`

    let kilogramsToPounds = inputValue * 2.204
    kilogramsPounds.textContent = `${inputValue} kilos = ${kilogramsToPounds.toFixed(3)} pounds`
    let poundsToKilograms = inputValue * (1 / 2.204)
    poundsKilograms.textContent = `${inputValue} pounds = ${poundsToKilograms.toFixed(3)} kilos`
    }    

})

clearBtn.addEventListener("click", function () {
    metersFeet.textContent = ""
    feetMeters.textContent = ""
    litersGallons.textContent = ""
    gallonsLiters.textContent = ""
    kilogramsPounds.textContent = ""
    poundsKilograms.textContent = ""
    inputField.value = ""
})