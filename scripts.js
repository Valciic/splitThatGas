const form = document.getElementById("form");
const distance = document.getElementById("distance");
const price = document.getElementById("price");
const consumption = document.getElementById("consumption");
const travelers = document.getElementById("travelers");
const submitBtn = document.getElementById("btn");
const output = document.getElementById("total");

submitBtn.addEventListener('click', calculateCosts);
form.addEventListener('input', toggleBtn);

function calculateCosts(e) {
    e.preventDefault();
    const km = parseInt(distance.value);
    const gasPrice = parseInt(price.value);
    const gasConsumption = parseInt(consumption.value)
    const travelerCount = parseInt(travelers.value);
    const gasUsed = (km * gasConsumption) / 100;
    const moneySpent = gasUsed * gasPrice;
    const costPerPerson = moneySpent / travelerCount;
    output.textContent = `${costPerPerson.toFixed(2)}€ no cilvēka;`;
}
function toggleBtn() {
    const inputFields = Array.from(form.getElementsByTagName("input"));
    const areInputFieldsFilled = inputFields.every(field => field.value)
    if(!areInputFieldsFilled) submitBtn.disabled = true
    else submitBtn.disabled = false;
}