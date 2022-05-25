const distance = document.getElementById("distance");
const price = document.getElementById("price");
const consumption = document.getElementById("consumption");
const travelers = document.getElementById("travelers");
const submitBtn = document.getElementById("btn");
const output = document.getElementById("total");

submitBtn.addEventListener('click', calculateCosts);

function calculateCosts(e) {
    e.preventDefault();
    const km = parseInt(distance.value);
    const gasPrice = parseInt(price.value);
    const litersPerHundredKm = parseInt(consumption.value) /100;
    const travelerCount = parseInt(travelers.value);
    const moneySpent = (km * litersPerHundredKm) * gasPrice / travelerCount;

    console.log(moneySpent);
    output.textContent = moneySpent;
}
